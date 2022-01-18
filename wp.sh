#!/bin/bash

for x in `find ./public/images -type f \( -iname \*.jpeg -o -iname \*.jpg -o -iname \*.JPG -o -iname \*.png \)`
  do cwebp -quiet -q 80 ${x} -o ${x}.webp;
  echo "Converted $x to ${x}.webp"
done