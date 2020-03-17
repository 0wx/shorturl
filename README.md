# Shorturl
This is a Node App that will shorter your link

### Installation
git clone this project
```
$ git clone https://github.com/0wx/shorturl.git
$ cd shorturl
```
then install all dependencies
```
$ npm i
```


## Configure data base
I recommend using [MonggoDB](https://mongodb.com)
- Create an account and then create a new cluster
- Create new database, and admin


then they will give you a link that look like this:
```
mongodb+srv://<yourdbusername>:<yourdbpassword>@<yourcluster>.mongodb.net/<yourdbname>?retryWrites=true&w=majority
```

make ```.env``` file then put the link like this:
```
host=mongodb+srv://<yourdbusername>:<yourdbpassword>@<yourcluster>.mongodb.net/<yourdbname>?retryWrites=true&w=majority
```
or take a look our .env-sample

## Run the app
and then run
```
npm start
```


# Usage
to use the app you simply using POST data method

Example
here an example I use using Node.Js, and ```request-promise``` library:
```
const rp = require('request-promise');
const url = 'https://somewebsite.com/home/index.php?id=123143333132';

const option = {
  method: 'POST',
  uri: 'https://inx.glitch.me/go', // change this to your app link
  body: {
    link: url
  },
  json: true
};


rp(option).then(data => {
  console.log(data)
});
```
Feel free to [ask me <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png' height="11px">](https://t.me/Awotism)  some question if you have any