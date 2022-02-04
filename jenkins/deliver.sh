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
export GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrUHaiKnba6U+L\nwUS1Z4b6QZX7EpZQv+A2ntLnyL5r50S/m1wo+X+x3WU0Q2Ftw8TS4BdeECNjv+Bq\nZNLUfVJMzhOOh5zKKcEoTlf/hLby69M/u/4HPQ4xfelREwwJFJd3Colzl7rLUPHJ\ncK4rNmNdh9Y3LHCcjy/Vl6gSX6JZCZ6R3e6FA4YFIz/BwW7wYJgcNZ9MB2zEK7xv\nHlg3QZQVJonbTxVVl7/p2Dovqbm0ewM1WsGRCkWKWuHo/+zNBbtgUasyXDEjRIKp\nrUc2HzZaADLoq4uz2cmyf9umHpo2blN8T//iu6wAZ45csMRsKIEaWJdUjC8xCIL9\nIBDmXQopAgMBAAECggEARQo23TDG2H85JwXa9k6EF5vR4S7C9ET3i5ujPHTqxNqd\nmqh2Ui8Glrw2GoNjItTIIAHeePKBCKSdwNLkIm1k+v375K9jcRe1t9Qm45ttDWYb\nqu5MuEcTTr/DBQDrk0dAqWFONo754RE8d+WY02JmVh21p2OZ+IY+DVLCkbEH4OB0\n6/uM5CbMLJevGWLTnV1KsKJ4Vw64Qnuz0ak27NE1xPfQeD5uIy4cC8uDH8a+nkeU\nGRUbUtuiEkESqG8+0Re1roAPt6ovKj2B4UTvfDXFAZ06bNyPWaAXvCJWDWiESaCe\nS5r2ff0Ntq0XLKSu/FobVUPsdnUhDEN2AbUzj88XBwKBgQDthrvxyvCAqtCo6BSI\npUmwsymNokm3P4a/n4Kip0MNoYd+1j7yaPfEbBNOAuObJTFTyjtezZoAEsY1kai5\ndhav6L99TFYD0Gt4jH1EHegmV8SFSFUxsNnxk88vSYBh1pBlNq/3L3Z+cOcNkd0u\nkO5AfETcqdhyrVCt8mM6lvgq7wKBgQC4o2pxFNwOFkkmyXNQoW7xUSmkTeqN6CGW\n+Hj4Nt96fnFBTuw4meAkLq9/XbzzeGp3oBxhx6t8K1JYugOECcKF+f1Krw17cC5l\nxBV7BsGH8WxyaFjoj6gADUMKqj3jDrmZJemttIoe2rvvhRzgNsPUWIxqjDZxaolH\nuFUuJ8h8ZwKBgAJRzoQN90tKX79GhOzQsGeJWF6Jty6S8D3u0NfFymHXsfsLHJJB\ndCn25Dlezdo2AsVOtEW4vEhD5qufQIaPIKmXHEec9zoSTvpeZNrFb/7v3HtwuWRC\n1d4GE3/it948uixC3HUNgZq6f4ciZYaO48S9ce61uedkyeTo+Q8ZalMBAoGAVkno\n4NhCz0KTBVF4VuJbGuQ3ddYEHDW0HP4aasYaQwD8pOzhcMJZAg/fbMK+H3rTJvzo\nxrmt5uXIIjcslXSKOFrQiSquPlX7GQw+jbRmlcW6TO1/P5CDjyKjhkRxj7+99VjG\nkKujMTBATHwFNrPhaUfIt7K3buG/LolzJZLqG1kCgYBHeB0JuC5G2vKck1ImoFsM\na91hGk4587GSG9jOXeEBjFksMOstZXJSA7szMDH8H3ZUcOxsooNXQ35CxL80V08+\nS1VxVSR7nZmPTdDj1lULrY34n3ewVdqvFKUcLbSHzUT2WwsZE9Ln9Va/GkhQd6OH\n1Mj7rY5PGJUn9i1EUzV4oQ==\n-----END PRIVATE KEY-----\n"
export RECAPTCHA_SITE_KEY="6Ld7syIeAAAAADG2wnpzBIgVEXtcQWJDhJl7FXbz"
export RECAPTCHA_SECRET="6Ld7syIeAAAAAFf4JVQVf4_P6ns2S-K8sm1h1vep"
export EMAIL_PASSWORD='p2\?"G\"9G}w@%Al+'
cd /usr/src/jenkins/$JOB_NAME
bash ./wp.sh
docker-compose down -v --remove-orphans
docker image prune -f
docker-compose up --build -d 

EOF