#!/bin/bash
# Neocities provies a REST API for uploading files
#
# Example Usage:
# $ USERNAME=username PASS=secret_pass bash upload_site.sh

function upload_file {
  fullName=$1
  shortName=${fullName:2}
  curl -F "$shortName"="@$fullName" https://$USERNAME:$PASS@neocities.org/api/upload
}

cd public_html
find . | while read file; do upload_file "$file"; done
