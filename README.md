# A site for multi-domain Maintenance Situations

This is used for when we need to disable the entire site and point the DNS somewhere else.

This is an Express JS app that will take URLs and then return the maintenance site based on the url.

## Install and running this
1. `$ git clone git@github.com:NaturalPoint/Maintenance-Site.git`
2. `$ cd maintenance-mode`
3. `npm install`
4. `npm start`
    - This will ask you for your password as the Express server runs on port 80 which requires root.

## Testing this locally
To test this locally you can set up host updates. This will make it so that whenever you navigate to a url that you specify it will go to the 127.0.0.1 instead.

*This method could also be used to test the production version. Just replace the 127.0.0.1 with the public IP where this Express app lives online.*

### Setting up your hosts file.
1. `$ cd /etc/`
2. `$ sudo nano hosts`
3. Paste the example below where you feel it makes sense.
4. Save and close
    1. `control` + `x`
    2. `y`

```
127.0.0.1      www.example.com
127.0.0.1      www.foobar.com
127.0.0.1      www.baz.com
127.0.0.1      example.com
127.0.0.1      foobar.com
127.0.0.1      baz.com
```
