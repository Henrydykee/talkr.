# chmod +x ./clear_pods.sh
# sudo chown -R $(whoami) ios
# sudo chown -R $(whoami) .
cd ios

pod cache clean --all

pod clean

pod deintegrate

sudo gem install cocoapods-deintegrate cocoapods-clean

sudo arch -x86_64 gem install ffi

arch -x86_64 pod repo update

arch -x86_64 pod install


