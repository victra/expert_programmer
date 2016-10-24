//show position or path folder
pwd

//back 1 step path
cd ..

//create file
touch keyboard.txt

//show file and detail that not hidden
ls -l

//show all file and detail
ls -la
other way
ls -alt

//copy all
cp * folder_name/

//copy all with condition(copy just letter m at first)
cp m*.txt scifi/

//remove folder and contains
rm -r name_folder

//read file on shell
cat name_file.txt

//overwrites content file to other
cat file_name.txt > file_name2.txt

//add content file to other
cat file_name.txt >> file_name2.txt

//sort content file
sort file_name.txt

//two or more syntax on one line command use '|'
cat file_name.txt | sort > sorted-file_name.txt

//show just one if duplicate
uniq file_name.txt

//search on file ex. search Mount on file_name.txt
grep Mount file_name.txt

//search on file that upper or lowercase is doesn't matter'
grep -i Mount mountains.txt

//search recursive on all file in some folder
grep -R Arctic /home/ccuser/workspace/geography
output:
/home/ccuser/workspace/geography/deserts.txt:Arctic Desert                                                       
/home/ccuser/workspace/geography/oceans.txt:Arctic Ocean                                                         
/home/ccuser/workspace/geography/uniq-deserts.txt:Arctic Desert                                                  
/home/ccuser/workspace/geography/continents.txt:Arctic Ocean 

//running or activate nano
source ~/.bash_profile

//change '$' to '>> '
nano ~/.bash_profile
add this code: export PS1=">> "

