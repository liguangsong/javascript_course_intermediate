#!/bin/sh
#get the commit content by user input if not initialed before.
echo "\033[33m Please input the commit words : \033[0m"
read commit
echo "\033[34m Content:'$commit' \033[0m"
#push code change on this respo.
echo "\033[33m now pushing code to remote \033[0m"
git add .
git commit -m "${commit}"
git pull --rebase
git push
echo "\033[32m Finished \033[0m"
cd ~/Projects/Jimi/update-client
node client.js
cd ~/Projects/L/Javascript/javascript_course_intermediate
echo "\033[32m updated \033[0m"


#echo "\033[33m update the course now?(y/n): \033[0m"
#read choose
#if "${choose}" == "y"
#then
#    node ~/Projects/Jimi/update-client/client.js
#    echo "\033[32m Updated \033[0m"
#else
#    echo "\033[32m Cancled \033[0m"
#fi
