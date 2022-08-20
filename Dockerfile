FROM ubuntu:18.04

# apk add --no-cache git make llvm clang gcc lld musl-dev
#

USER nobody
ENV PATH+=:/usr/local/depot_tools
RUN apk --no-cache add git \
	&& git clone https://chromium.googlesource.com/chromium/tools/depot_tools \
	&& git clone https://github.com/v8/v8 \
	&& cd v8 \
	&& git checkout 26dad80ff512b256c2cde7c97175d36e55adc0c0 \

#	&& git clone https://github.com/googleprojectzero/fuzzilli.git /opt/fuzzilli
# /opt/fuzzilli/Targets/V8/fuzzbuild.sh



#install-build-deps.sh

RUN apt-get update\
  && apt-get install -y wget xz-utils build-essential curl git subversion make g++ python chrpath libicu-dev lsb-release \
  && apt-get clean\
  && rm -rf /var/lib/apt/lists/* \
  && curl -SL http://releases.llvm.org/7.0.1/clang+llvm-7.0.1-x86_64-linux-gnu-ubuntu-18.04.tar.xz | tar -xJC . \
  && mv clang+llvm-7.0.1-x86_64-linux-gnu-ubuntu-18.04 /usr/share/clang_7.0.1 \
  && echo 'export PATH="/usr/share/clang_7.0.1/bin:$PATH"' >> ~/.bashrc \
  && echo 'export LD_LIBRARY_PATH="/usr/share/clang_7.0.1/lib:LD_LIBRARY_PATH"' >> ~/.bashrc\
  && export LD_LIBRARY_PATH="/usr/share/clang_7.0.1/lib:LD_LIBRARY_PATH"\
  && export PATH="/usr/share/clang_7.0.1/bin:$PATH"\
  && wget https://swift.org/builds/swift-4.2.3-release/ubuntu1804/swift-4.2.3-RELEASE/swift-4.2.3-RELEASE-ubuntu18.04.tar.gz\
  && tar xzf swift-4.2.3-RELEASE-ubuntu18.04.tar.gz\
  && mv swift-4.2.3-RELEASE-ubuntu18.04 /usr/share/swift\
  && echo 'export PATH="/usr/share/swift/usr/bin:$PATH"' >> ~/.bashrc\
  && export PATH="/usr/share/swift/usr/bin:$PATH"\
  && git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git /usr/local/depot_tools\
  && echo 'export PATH="$PATH:/usr/local/depot_tools"' >> ~/.bashrc\
  && export PATH="$PATH:/usr/local/depot_tools"\
  && mv /usr/bin/apt-get /usr/bin/apt-get-interactive\
  && echo '#!/bin/bash\nenv DEBIAN_FRONTEND=noninteractive /usr/bin/apt-get-interactive "$@"' > /usr/bin/apt-get\
  && chmod +x /usr/bin/apt-get\
  && apt-get update && apt-get install -y sudo\
  && cd /usr/local/src\
  && fetch v8\
  && cd /usr/local/src/v8\
  && git fetch\
  && gclient sync\
  && chmod +x /usr/local/src/v8/build/install-build-deps.sh\
  && /usr/local/src/v8/build/install-build-deps.sh\
  && git clone https://github.com/googleprojectzero/fuzzilli.git /opt/fuzzilli\
  && cd /usr/local/src/v8\
  && git checkout 26dad80ff512b256c2cde7c97175d36e55adc0c0\
  && patch -p1 < /opt/fuzzilli/Targets/V8/v8.patch\
  && chmod +x /opt/fuzzilli/Targets/V8/fuzzbuild.sh\
  && gclient sync\
  && ./build/install-build-deps.sh\
  && /opt/fuzzilli/Targets/V8/fuzzbuild.sh\
  && rm /usr/bin/apt-get \
  && mv /usr/bin/apt-get-interactive /usr/bin/apt-get\
  && cd /opt/fuzzilli\
  && echo '#!/bin/bash\n\n. ~/.bashrc && cd /opt/fuzzilli && swift build -c release -Xlinker=''-lrt'' && swift run -Xlinker=''-lrt'' -c release FuzzilliCli "$@"' > /opt/fuzzilli/run.sh\
  && chmod +x /opt/fuzzilli/run.sh

ENV PATH "/usr/share/clang_7.0.1/bin:${PATH}"
ENV LD_LIBRARY_PATH "/usr/share/clang_7.0.1/bin:${LD_LIBRARY_PATH}"
ENV PATH "${PATH}:/usr/local/depot_tools"

FROM swift:latest

COPY --from=0  /opt/fuzzilli /opt/fuzzilli/
COPY --from=0  /usr/local/src/v8/out /usr/local/src/v8/

WORKDIR "/fuzzilli"
VOLUME /data

# [7/7] Linking FuzzilliCli
# [REPRL] Failed to communicate with child process
# https://github.com/googleprojectzero/fuzzilli/blob/f6edda203f1c6bc3b38af49812f75b8f7102f9f7/Sources/libforkserver/forkserver.c#L113

ENTRYPOINT [ "/bin/bash", "-c", "/opt/fuzzilli/run.sh --storagePath=/data --profile=v8 /usr/local/src/v8/out/fuzzbuild/d8"]
