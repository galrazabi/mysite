# Gal Razabi

Gal Razabi site is a site build with html js and css.

## Open site

1. install Live server on your machine from - 
[LIVESERVER](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

2. Right click on the index.html.

3. Open with live server.

## Pages

1. about
2. contact
3. homepage
4. vacations

## Usage

### generatePhotosCollection - 
This function is receiving a title that represent the country name of my vacation and imageArr is representing array of images.
The function inject elements into an variable called "gallery" and creating container for every destination of the vacation.

```javascript
function generatePhotosCollection(title, imagesArr)
```
### loadHtml - 
This function is receiving id that representing id from the DOM and filename that representing the HTML file name.
this function run a promise that get the filename as an argument.
if the filename is equal to 'vacation.html' it calls the generatePhotosCollection function and generate the new html page into the id the function received.
otherwise the text from the filename page will displayed


```javascript
function loadHtml(id, filename) 
```

### function refreshValue() - 
This function refreshing the forms inputs after 500 seconds in the "contact.html" page using setTimeOut function.
This function created to reset the inputs after sending an email. 

```javascript
function refreshValue()
```

## Validation
 I use the 'required' property in the pages:
 1) homepage.html in the question at the end og the page.
 2) contact.html - in the email's subject and textarea.
 I validat that the user insert an answer before sending the form.
 