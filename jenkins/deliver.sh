#!/bin/sh

ssh root@1data.hu << EOF
echo /usr/src/jenkins/$JOB_NAME
rm -rf /usr/src/jenkins/$JOB_NAME
mkdir -p /usr/src/jenkins/$JOB_NAME

EOF


echo copy files to remote
scp -r * root@1data.hu:/usr/src/jenkins/$JOB_NAME



ssh root@1data.hu << EOF
export EMAIL_PASSWORD="94kTKndIxz"
export CLIENT_EMAIL="ebpalyazat@my-speech-1586206444417.iam.gserviceaccount.com"
export GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDH7SRB9RgHMOqh\nSWje9bUmwh9sND7URoiPaf64nnqiG1M8bu9CsI5LPneIgHbEdTZbKhTIjJ4sxrzs\nA/UpAxq8uS0Wh6klj56avCnkqm49av4Qs4UO2CuMO8AL+M9DZCA76PUh0G1w40JK\nR9RDTxKvEBtdnwOot3RAUJjbd8nbuCX0EVPR3hSzX9kZNSgrhpMQHgKXEXJ7K+dT\noozmVy+pS/TglUff79mdKGJ291cPXspZuES5CM7b15qvkSiDoEMf9npYJ+SfwzOC\nzo0yh8JcPFhCZV/Mix5iZaSD1OmjKCEAj/6NPJ17SXVvxJef8wSkV1k/v8ogMhQj\nioSrcxDLAgMBAAECggEADHUCutdeMWiDXhxYW/gcWvdihNf2iDyC2sjEddVuF7az\nJ4NUBihBHYAda5Rxkgkpo2GKXPqiCnExqVUPzAfk/RherlYynGQIAmUyCQzzhIEr\npnfBFS0z/W9lpnlQ1Mai2YjI6Vv2zb9jTISQPcdqBx1uTxWO4U7Y//7ln1sl6TpC\ndNvRwF0hWQB+7o4paKCf2y9gvWIhyvWeqwXERH/SB/9G7aaKzqSUJ5DfURRzH2qT\nmc/aOyPamNWVGZVZ7YfacXFSEzIwL2O9RJO31wV6JFZQkbnD7y72/jj1GEKiPz5l\nVFHJMU7Mfd/ymaaconsowLacqSRrA3GuHE7ZiyXyiQKBgQDl58be+inoUmXUx1G5\nhRlc+28YJaT9jGYR4keBrBI3PhBBkgs2fWH5xAgIuR1d/1TUo8zBZ4zserpSNUXs\nA9/3vzx0WX9Af2jAWpcDrVxMnE/+/wnJdCB1xmsT6UGY3EZhH3K9a+37VK0JYRjn\nPAfMzphM7E1Qbo73A8sMacSCuQKBgQDenkgZPTVd7ZJcZeGNwhpNkhUjgdNSemRP\nNjXhjXSNGk+MAP30mRpQzxAO5COfXBoyHuZGih7F188ke4T5bT1Ve+MFvjIRZHjg\naIH9A5EikekYN+VHW4azsaRIHnayTQhEzYQZSK2HfwJ0K27EOe22CmJV6N3zKr6h\nv4zzKbv9owKBgQCPv5DwADjNwx9aoFmwBtGp+qgmz/rOccesLPCK2pz1H4Aoj3kl\nU9Y7xd9EHQKIsEpJPjWbQ/SwM7hmCFs0y+Nw04ioMwFGwaMsijfcG7wXRrEZ/jsP\nU+Wr3ik7ZOAYBLqYpYInf+FoATTEJYrdogI6g35ksmdRAB+xwRRnKYauOQKBgQCv\n41cLufSkVcRCBK0FF8s4ZqcU+spAbDs86pP/tYfUxGj9MPt1elH0buU9HruWeWqp\nFwjRyuctYalkJcOWXt0K4WspanCclUl75JZvlZXiPm5wmBkrHAF9kGlAIfGeRoa1\n9brdTzLrz0ndB0Po/ev23JV9UxOpwKgFnBZ9OQgzCQKBgQDHwxFs6k+pYQef7Dis\nm3kRRkPLwq31G/eIwQTPduWZK/ZRZhzk8AS3wOi9FZJ/XorSl2BgLFpPMz0LUsrb\nhH6Rmc+f19pQK2Wa8iI6lQZCcqU1Ablwmo7IHjqyNbZHjKLlnLG9miR30JKQhiGU\n3Ko6MbKK2YLKLz+UkkN+/AMiCQ==\n-----END PRIVATE KEY-----\n"
export RECAPTCHA_SITE_KEY="6Ld7syIeAAAAADG2wnpzBIgVEXtcQWJDhJl7FXbz"
export RECAPTCHA_SECRET="6Ld7syIeAAAAAFf4JVQVf4_P6ns2S-K8sm1h1vep"
cd /usr/src/jenkins/$JOB_NAME
bash ./wp.sh
docker-compose down -v --remove-orphans
docker image prune -f
docker-compose up --build -d 

EOF