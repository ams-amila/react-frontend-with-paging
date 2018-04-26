# React front end with paging

## How to start the application? 

> npm start -s

Note : Make sure to start [Spring Boot Paging](https://github.com/ams-amila/spring-boot-paging) before execute npm command

Application will start on port 3000 - http://localhost:3000

## What are the available routes?

### All Persons - /

All the available persons will listed here with  [Intinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) (Initially 9 persons will loaded and others will load according to the scroll event)

### Create person - /new-person

Provide first name, last name and bio (you can use more Rich Text editor features - [React Tiny mce](https://www.npmjs.com/package/react-tinymce)) for create a person entry. After successful creation you will redirect to All persons page.
