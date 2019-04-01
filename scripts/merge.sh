#!/bin/bash
OutFileName="bicycle_theft.csv"                   # Fix the output name
i=0                                       # Reset a counter
for filename in ./8f5f35076f750ff390f2098a34f18691fa022b62/**/*.csv; do 
 if [ "$filename"  != "$OutFileName" ] ;  # Avoid recursion 
 then 
   if [[ $i -eq 0 ]] ; then 
      head -1  $filename >   $OutFileName # Copy header if it is the first file
   fi
   tail -n +2  $filename >>  $OutFileName # Append from the 2nd line each file
   i=$(( $i + 1 ))                        # Increase the counter
 fi
done
