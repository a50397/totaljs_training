---
lastmod: '2021-09-20T08:58:23.023Z'
---

*CONF (F.config):* is a way to access the configuration set in the config file in the root of the project, read only meant for the core config
- set up: 
    - you can edit the config file in root. be careful, it's used by the whole framework.
    - you can set the configs dynamically, using `LOADCONFIG({ name: 'gr8 app' })` global function
- in order to access the info stored in the config file, you'll use:
    - @{CONF.key} in view 
    - CONF.key in code

*DEF*: definitions
  defined in the `definitions` directory as flat js files
  - DEF.blacklist['127.0.0.1'] = true;
  - DEF.helpers.sum = function(a, b) {
	    return a + b;
	}; 
  - DEF.validators are regexes for validating data (DEF.validators.email)

*FUNC* - it's a way to define and reuse global functions
  defined in the `definitions` directory as flat js files
    `FUNC.addTwo = function(x){
        x+2;
    }`
    will be accessible via FUNC.addTwo from each part of the application

*MAIN/REPO* - this is a way of sharing data in the application
  - as you would expect, it is used like
    `MAIN.data = {‘name’: ‘Peter’}`
    
*PREF* used to manipulate and persist the user preferences data. 
- Can be modified by `PREF.set(name, value)` and read by `PREF.name`
- They will be eventually saved in the `databases/preferences.json` file.
- This behavior can be changed in the `DEF.onPrefLoad` and `DEF.onPrefSave` callbacks

*TEMP* will be cleaned once per 7 minutes

*U/FrameworkUtils* predefined utility functions
  -  U.atob(), U.btoa()
  -  U.httpstatus(code)
  -  U.getContentType(extension)
  -  U.link() - link URL style paths
  -  U.join() - link FS style paths
  -  U.getName(), U.getExtension(), ls()
  -  U.parseFloat(), U.parseInt()
  -  U.random(), U.random_number(max_digits), U.random_string(max)

*UID())* - create unique ID 

*MAIL(address, subject, view, model);* - send mail using view template

*HTMLMAIL(address, subject, html)* - send your own html as mail

*LOGMAIL(address, subject, body)* - send plain string as mail

*AUDIT($, message, message_type)* - write audit log

*PATH* resolve absolute path of different framework's directories

*string prototype* - 
- encode and decode - html safe strings
- hash
- is... methods - check type (isUID for UID())
- parse... - parse data from the string (multiple formats)
- slug - creates link like string from a string
- toAscii - utf8 to ASCII

*number prototype*
- round
- floor
- filesize - get nice string with filesize

*array prototype*
- find... - find item, index, value, multiple items
- quicksort(path, asc) - sorting
- remove - remove from array
- take, skip - limit which items you get
- wait - enhanced javascript's forEach
