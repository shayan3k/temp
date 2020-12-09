# BESALTPLUS Front Project

First phase - Starting date - 6/11

First phase - Deadline - 6/24

First phase - Update Status - 6/14

Second phase - Update Status - 6/30

Second phase - Update Status - 7/1

Second phase - Update Status - 7/9

//got sick :|
Second phase - Update Status - 7/22

Second phase - Update Status - 7/29

Second phase - Update Status - 8/1

Second phase - update status - 8/13

Finished second phase - 8/30

### Bellow is the reference numbers pointing to client's specifications:

Phase One : 1, 2, 4, 6, 15, 19, 23, 24, 25, 26

Phase Two Starter: 7, 8, 9, 10, 13, 14, 16, 27, 28 + 11, 12, 17

## GENERAL RESPONSE MAP

```
response : {
success: Boolaen,
err : Boolean,
message : String,
data : MIX|Array|Object
}
```

### AUTH ROUTE SPECIFICATIONS

```
Routes => [
{
url : '/api/auth/register-start',
auth : public ,
method : 'POST',
parameters : {
    phone_number : String|Required,
    reference_phone_number : String|Optional
},
details : 'GUESTS COULD START REGISTERATION AND GET THE SMS CODE'
},

{
url : '/api/auth/register-complete',
auth : public ,
method : 'POST',
parameters : {
    code : String|Required
},
details : 'GUESTS COULD COMPLETE REGISTRATION AND GET THE AUTH USER'
},

{
url : '/api/auth/login-start',
auth : public ,
method : 'POST',
parameters : {
    phone_number : String|Required,
},
details : 'GUESTS COULD START LOGIN PROCESS AND GET THE SMS CODE'
},

{
url : '/api/auth/login-complete',
auth : public ,
method : 'POST',
parameters : {
    code : String|Required
},
details : 'GUESTS COULD COMPLETE LOGIN PROCESS AND GET JWT TOKEN'
},

{
url : '/api/auth/jwt-student',
auth : public ,
method : 'GET',
details : 'DEVELOPER COULD AUTHENTICATE AS A STUDENT THROUGH THIS API'
},

{
url : '/api/auth/jwt-admin',
auth : public ,
method : 'GET',
details : 'DEVELOPER COULD AUTHENTICATE AS A ADMIN THROUGH THIS API'
},

{
url : '/api/auth/is-authenticated',
auth : public ,
method : 'GET',
details : 'RETURNS IF THE USER IS AUTHENTICATED OR NOT, USED FOR FRONT END DEVELOPMENT ROUTERS'
}
]

```

### USER ROUTE SPECIFICATIONS

```
Routes => [
{
url : '/api/user/get-user-information',
auth : private,
method : 'POST'
users : Students,
details : 'USER COULD GET THE CURRENT USER INFORMATION'
},

{
url : '/api/user/update-user-information',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    name: string|required,
    lastname: string|required,
    name_english: string|required,
    lastname_english: string|required,
    father_name: string|required,
    email: string|email|required,
    grade_id: string|MongoDBId,
    province_id: string|required,
    city_id: string|required,
    school: string|required,
    image : file|optional
},
details : 'USER COULD UPDATE PROFILE INFORMATION THROUGH THIS API'
},

{
url : '/api/user/submit-peyment-request',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    amount: string|Int|required,
},
details : 'USER COULD Increase panel balance'
},

{
url : '/api/user/referenced-users',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET REFERENCE USERS FOR THIS PARTICULAR USER'
},

{
url : '/api/user/reference-link',
auth : private ,
method : 'POST'
users : Students,
details : 'STUDENT COULD GET THE REFERENCE LINK'
},

{
url : '/api/user/get-national-id',
auth : private,
method : 'POST'
users : Students,
details : 'USER COULD GET NATIONAL ID INFORMATION'
},

{
url : '/api/user/update-national-id',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    national_id: string|required|length(10),
    image: file|optional
},
details : 'USER COULD UPDATE NATIONAL ID INFORMATION'
},

{
url : '/api/user/get-active-alerts',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET ALL THE ACTIVE ALERTS TO BE SHOWN IN DASHBOARD'
},

{
url : '/api/user/get-successful-deposits',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET ALL THE ACTIVE ALERTS TO BE SHOWN IN DASHBOARD'
},

{
url : '/api/user/get-user-balance',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET THEIR CURRENT BALANCE'
},

{
url : '/api/user/submit-gift-code',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    code:  string|required,
},
details : 'USER COULD GET ALL THE ACTIVE ALERTS TO BE SHOWN IN DASHBOARD'
},

{
url : '/api/user/gift-code-history',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET ALL GIFT CODE USER HISTORY'
},

{
url : '/api/user/get-single-course',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    course_id:  string|required|MongoID,
},
details : 'USER COULD ENROL FOR A COURSE SESSION'
},

{
url : '/api/user/enrol-course-session',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    course_id:  string|required|MongoID,
    id:  string|required|MongoID,
},
details : 'THIS ROUTE IS NOT YET FINALIZED//USER COULD ENROL FOR A COURSE SESSION'
},

{
url : '/api/user/get-enrolled-course',
auth : private ,
method : 'POST'
users : Students,
details : 'USER GET THE LIST OF REGISTERED COURSES'
},

{
url : '/api/user/create-new-comment',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    course_id:  string|required|MongoID,
    text:  string|required,
    user:  string|required,
    text:  string|required,
},
details : 'USER COULD SUBMIT A COMMENT FOR A COURSE ID'
},

{
url : '/api/user/update-single-comment',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    id:  string|required|MongoID,
    text:  string|required,
},
details : 'USER UPDATE A COMMENT WITH THE RESPECTIVE ID'
},

{
url : '/api/user/get-future-event',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET THE FUTURE EVENTS FOR THE CALENDAR'
},

{
url : '/api/user/start-course-exam',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    exam_id:  string|required|MongoID,
},
details : 'USER COULD START AN EXAM SESSION'
},

{
url : '/api/user/submit-course-exam',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    exam_id:  string|required|MongoID,
    question_answer : string|JSON|optional
},
details : 'USER COULD SUBMIT AN EXAM SESSION'
},

{
url : '/api/user/get-active-exam',
auth : private ,
method : 'POST'
users : Students,
details : 'USER GET THE ACTIVE EXAM RECORD IF EXISTS,'
},

{
url : '/api/user/get-exam-record',
auth : private ,
method : 'POST'
users : Students,
details : 'USER GET ALL THE EXAM RECORDS'
},

{
url : '/api/user/single-exam-record',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    id:  string|required|MongoID,
},
details : 'USER GET A SINGLE EXAM RECORD'
},

{
url : '/api/user/create-session-assignment',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    session_id:  string|required|MongoID,
    image:  file|mimeType:img,
},
details : 'USER CREATES AN ASSIGNMENT RECORD'
},

{
url : '/api/user/get-all-assignment',
auth : private ,
method : 'POST'
users : Students,
details : 'USER GET ALL ASSIGNMENT RECORD'
},

{
url : '/api/user/get-session-assignment',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    session_id:  string|required|MongoID,
},
details : 'USER GET ALL SINGLE SESSION ASSIGNMENT RECORDS'
},

{
url : '/api/user/get-single-assignment',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    id:  string|required|MongoID,
},
details : 'USER A SINGLE ASSIGNMENT RECORDS'
},

{
url : '/api/user/delete-single-assignment',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    id:  string|required|MongoID,
},
details : 'USER DELETE SINGLE ASSIGNMENT RECORD'
},

{
url : '/api/user/get-exam-questionnaire',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    id:  string|required|MongoID,
},
details : 'USER GET A SINGLE EXAM QUESTIONNAIRE'
},
]


```

### ADMIN ROUTE SPECIFICATIONS

```

Routes => [
{
url : '/api/admin/get-all-users',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
        phone_number: string|optional|length(11),
},
details : 'ADMIN COULD GET LIST OF ALL USERS'
},

{
url : '/api/admin/get-single-user',
auth : private,
method : 'POST'
users : Admin,
parameters : {
    id: string|mongodb|required,
},
details : 'ADMIN GETS A SINGLE USER INFO'
},

{
url : '/api/admin/update-user-block',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
    phone_number: string|required|length(11),
},
details : 'ADMIN COULD UPDATE USER BLOCK STATUS'
},

{
url : '/api/admin/update-single-user',
auth : private ,
method : 'POST'
user : admin,
parameters : {
    phone_number : String|required,
    name: string|required,
    lastname: string|required,
    name_english: string|required,
    lastname_english: string|required,
    father_name: string|required,
    grade_id: string|MongodbId,
    province_id: string|required,
    city_id: string|required,
    school: string|required,
    email: string|email|required,
    balance: string|Int|required,
    image : file|optional
},
details : 'ADMIN UPDATE SINGLE USER'
},

{
url : '/api/admin/get-all-alert',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN COULD GET ALERTS LIST'
},

{
url : '/api/admin/get-single-alert',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE ALERT'
},

{
url : '/api/admin/create-new-alert',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
    title: string|required,
    subtitle: string|optional,
    message: string|required,
    status: string|required,
},
details : 'ADMIN COULD CREATE ALERTS FOR USERS'
},

{
url : '/api/admin/update-single-alert',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    id: objectId|required,
    title: string|required,
    subtitle: string|optional,
    message: string|required,
    status: string|required,
},
details : 'ADMIN COULD UPDATE SINGLE ALERT'
},

{
url : '/api/admin/delete-single-alert',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    id: objectId|required,
},
details : 'ADMIN COULD DELETE SINGLE ALERT'
},

{
url : '/api/admin/get-national-id',
auth : private ,
method : 'POST'
users : admin,
{
    is_verified : boolean|optional
}
details : 'ADMIN GET LIST OF NATIONAL ID INFORMATION'
},

{
url : '/api/admin/confirm-national-id',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    phone_number: string|required|length(11),
},
details : 'ADMIN CONFIRMRS A NATIONAL ID RECORD'
},

{
url : '/api/admin/delete-national-id',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    phone_number: string|required|length(11),
},
details : 'ADMIN DELETE NATIONAL ID RECORD'
},

{
url : '/api/admin/create-gift-code',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    count: string|int|required,
    amount: string|int|required,
},
details : 'ADMIN CREATES NEW GITF CODE'
},

{
url : '/api/admin/get-gift-code',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    is_active: Boolean|optional,
},
details : 'ADMIN GETS THE LIST OF ACTIVE AND DEACTIVATED GIFT CODES '
},

{
url : '/api/admin/get-gift-code-logs',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GETS THE LATEST GOFT CODE LOGS'
},

{
url : '/api/admin/get-user-gift-code-logs',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    id: string|MONGOID|required,
},
details : 'ADMIN GETS THE GIFT CODE USED LOG OF A PARTICULAR USER'
},

{
url : '/api/admin/get-all-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        lastname: string|optional,
},
details : 'ADMIN GET ALL THE TEACHERS '
},

{
url : '/api/admin/get-single-teacher',
auth : public ,
method : 'POST'
users : public,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GET DETAILS FOR A SINGLE TEACHER'
},

{
url : '/api/admin/create-new-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    name : string|required ,
    lastname : string|required ,
    sex : string|required ,
    diploma : string|required ,
    cv : string|required ,
    image : MIMETYPE:Img|optional
},
details : 'ADMIN CREATES NEW TEACHER IN THE DATABASE'
},

{
url : '/api/admin/update-single-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    ID : string|required|MongoID ,
    name : string|required ,
    lastname : string|required ,
    sex : string|required ,
    diploma : string|required ,
    cv : string|required ,
    image : MIMETYPE:Img|optional

},
details : 'ADMIN UPDATES SINGLE TEACHER IN THE DATABASE'
},

{
url : '/api/admin/delete-single-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    ID : string|required|MongoID ,
},
details : 'ADMIN DELETE SINGLE TEACHER IN THE DATABASE'
},

{
url : '/api/admin/create-new-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    title : string|required,
    grade_id : string|mongoDBid ,
    category_id : Array | mongoDBid ,
    description : string|required ,
    teacher_id : string|mongoDBid ,
    is_a_session : Boolean,
    is_pay_all : Boolean,
    image : MIMETYPE:img|optional

},
details : 'ADMIN CREATES NEW COURSE'
},


{
url : '/api/admin/get-all-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        title: string|optional,
},
details : 'ADMIN COULD GET ALL THE COURSE RECORDS'
},


{
url : '/api/admin/get-single-course',
auth : private ,
method : 'POST'
users : Students,
parameters : {
    id:  string|required|MongoID,
},
details : 'USER COULD ENROL FOR A SINGLE COURSE'
},

{
url : '/api/admin/update-single-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        title : string|required,
        grade_id : string|mongoDBid|required ,
        category_id : Array | mongoDBid ,
        description : string|required ,
        teacher_id : string|mongoDBid|required ,
        is_a_session : Boolean,
        image : MIMETYPE:img|optional

},
details : 'ADMIN UPDATES SINGLE COURSE DETAILS'
},

{
url : '/api/admin/delete-single-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN DELETES SINGLE COURSE DETAILS'
},

{
url : '/api/admin/create-course-session',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    course_id : string|required|MongoID,
    subject : string|required,
    duration : string|Int|required,
    price : string|Int|required,
    start_time : string|date|required,
    index : string|Int|required,
    lecture_note : MIMtype:PDF|optional
    video_url : string|required,
    image : MIMtype:img|optional

},
details : 'ADMIN CREATES NEW SESSION FOR A SINGLE COURSE'
},

{
url : '/api/admin/single-course-session',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE COURSE SESSION'
},

{
url : '/api/admin/update-course-session',
auth : private ,
method : 'POST'
users : admin,
parameters : {
    ID : string|required|MongoID,
    course_id : string|required|MongoID,
    subject : string|required,
    duration : string|Int|required,
    price : string|Int|required,
    start_time : string|date|required,
    index : string|Int|required,
    lecture_note : MIMtype:PDF|optional
    video_url : string|required,
    image : MIMtype:img|optional
},
details : 'ADMIN UPDATE COURSE SESSION FOR A SINGLE COURSE'
},

{
url : '/api/admin/delete-course-session',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN DELETES SINGLE COURSE SESSION FOR A SINGLE COURSE'
},

{
url : '/api/admin/get-all-comment',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN COULD GET ALL THE COMMENT RECORDS'
},

{
url : '/api/admin/confirm-single-comment',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN CONFIRMS SINGLE COMMENT RECORD'
},

{
url : '/api/admin/delete-single-comment',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN DELETES SINGLE COMMENT RECORD'
},

{
url : '/api/admin/create-comment-reply',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        comment_id : string|required|MongoID,
        Text : string|required

},
details : 'ADMIN CREATES A COMMENT REPLY RECORD FOR A USER COMMENT'
},

{
url : '/api/admin/single-comment-reply',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,

},
details : 'ADMIN GET A SINGLE COMMENT REPLY RECORD'
},

{
url : '/api/admin/update-comment-reply',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        text : string|required ,
},
details : 'ADMIN UPDATES A COMMENT REPLY RECORD FOR A USER COMMENT'
},

{
url : '/api/admin/delete-comment-reply',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN DELETES A COMMENT REPLY RECORD FOR A USER COMMENT'
},

{
url : '/api/admin/get-course-exam',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        course_id : string|required|MongoID,
},
details : 'ADMIN GETS ALL EXAMS FOR A SINGLE COURSE'
},

{
url : '/api/admin/create-course-exam',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        title : string|required|MongoID,
        category : string|required|["pop quiz","midterm", "final"],
        course_id : string|required|MongoID,
        duration : number|required,
        pass_point : number|required,
        total_point : number|required,
        negative_type : string|required|["no-negative", "with-negative"],
        is_show_key : boolean|required,
        image : file|Mimetype:img|optional,
        question : file|Mimetype:pdf|required,
        start_time : string|date|required,
},
details : 'ADMIN CREATES NEW EXAMS FOR A SINGLE COURSE'
},

{
url : '/api/admin/single-course-exam',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GET A SINLGE COURSE EXAM RECORD'
},

{
url : '/api/admin/update-course-exam',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        title : string|required|,
        category : string|required|["pop quiz","midterm", "final"],
        duration : number|required,
        pass_point : number|required,
        total_point : number|required,
        negative_type : string|required|["no-negative", "with-negative"],
        is_show_key : boolean|required,
        is_random_question : boolean|required,
        image : file|Mimetype:img|optional,
        question_optional : file|Mimetype:pdf|optional,
        start_time : string|date|required,
},
details : 'ADMIN UPDATES A SINGLE EXAM RECORD FOR A SINGLE COURSE'
},

{
url : '/api/admin/delete-course-exam',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN DELETES A SINGLE EXAM RECORD FOR A SINGLE COURSE'
},

{
url : '/api/admin/get-exam-questionnaire',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        exam_id : string|required|MongoID,
},
details : 'ADMIN GETS ALL THE EXAM QUESTIONS FOR A SINGLE EXAM'
},

{
url : '/api/admin/single-exam-questionnaire',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GET A SINLGE COURSE EXAM QUESTIONNAIR RECORD'
},

{
url : '/api/admin/create-exam-questionnaire',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        exam_id : string|required|MongoID,
        index : String|int|min:1|required,
        answer : string|required|["1","2","3","4"],
},
details : 'ADMIN CREATES NEW EXAM QUESTION FOR A SINGLE EXAM'
},

{
url : '/api/admin/update-exam-questionnaire',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        index : String|int|min:1|required,
        answer : string|required|["1","2","3","4"],
},
details : 'ADMIN UPDATES A SINGLE EXAM QUESTION FOR A SINGLE EXAM'
},

{
url : '/api/admin/delete-exam-questionnaire',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN DELETES A SINGLE EXAM QUESTION FOR A SINGLE EXAM'
},

{
url : '/api/admin/get-exam-record',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GETS ALL EXAM RECORDS'
},


{
url : '/api/admin/get-course-record',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GETS ALL EXAM RECORDS WITH A COURSE _ID'
},

{
url : '/api/admin/single-exam-record',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GET A SINLGE EXAM RECORD'
},

{
url : '/api/admin/user-exam-record',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GET ALL EXAM RECORD FOR A SINGLE USER'
},

{
url : '/api/admin/update-exam-record',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        start_time : String|ISODateFormat|required,
        is_active : Boolean|optional,
},
details : 'ADMIN UPDATE A SINLGE EXAM RECORD'
},

{
url : '/api/admin/delete-exam-record',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN DELETE A SINLGE EXAM RECORD'
},

{
url : '/api/admin/get-all-assignment',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GETS ALL THE ASSIGNMENT RECORD'
},

{
url : '/api/admin/get-session-assignment',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        session_id : string|required|MongoID,
},
details : 'ADMIN GETS SINGLE SESSION'S ALL THE ASSIGNMENT RECORD'
},

{
url : '/api/admin/get-course-assignment',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GETS SINGLE COURSE'S ALL THE ASSIGNMENT RECORD'
},

{
url : '/api/admin/get-single-assignment',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GETS SINGLE ASSIGNMENT RECORD'
},

{
url : '/api/admin/get-user-assignment',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN GETS SINGLE USERS ALL ASSIGNMENT'
},

{
url : '/api/admin/delete-single-assignment',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
    id:  string|required|MongoID,
},
details : 'ADMIN DELETE SINGLE ASSIGNMENT RECORD'
},

{
url : '/api/admin/user-enrolled-course',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
    id:  string|required|MongoID,
},
details : 'ADMIN GET SINGLE USER ENROLLED COURSES WITH USER ID'
},



{
url : '/api/admin/get-all-deposit',
auth : private ,
method : 'POST'
users : Admin,
details : 'ADMIN GET ALL PEYMENT'
},

{
url : '/api/admin/get-user-deposit',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
    id:  string|required|MongoID,
},
details : 'ADMIN GET SINGLE USER ALL PEYMENT BY USER ID'
},

{
url : '/api/admin/get-dashboard-statistic',
auth : private ,
method : 'POST'
users : Admin,
details : 'ADMIN GET DASHBOARD STATISTICS'
},

{
url : '/api/admin/update-admin-information',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
        name:  string|required,
        lastname:  string|required,
        image : mimetype:img|optional,
},
details : 'ADMIN GET SINGLE USER ALL PEYMENT BY USER ID'
},
]
```

### HOME ROUTE SPECIFICATIONS

```

Routes => [
{
url : '/api/home/get-count-down',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE COUNT DOWN DATETIME'
},

{
url : '/api/home/get-filter-course',
auth : public ,
method : 'POST'
users : public,
parameters : {
        title_search : string|required|optional,
        grade_search : string|required|MongoID|optional,
        category_search : string|required|MongoID|optional,
        teacher_search : string|required|MongoID|optional,
},
details : 'GET LIST OF ALL COURSES ACCORDING TO THE INPUT FILTER'
},

{
url : '/api/home/get-single-course',
auth : public ,
method : 'POST'
users : public,
parameters : {
        course_id : string|required|MongoID,
},
details : 'GET SINGLE COURSE DETAILS'
},

{
url : '/api/home/get-all-grade',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL GRADE ITEMS'
},

{
url : '/api/home/get-all-category',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL CATEGORIES ITEMS'
},

{
url : '/api/home/get-all-province',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL PROVINCE ITEMS'
},

{
url : '/api/home/get-specific-city',
auth : public ,
method : 'POST'
users : public,
parameters : {
        province_id : string|required|MongoID,
},
details : 'GET CITIES FOR A SPECIFIC PROVINCE '
},

{
url : '/api/home/get-all-course',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE LIST OF ALL COURSES'
},

{
url : '/api/home/get-all-teacher',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE LIST OF ALL TEACHERS'
},

{
url : '/api/home/get-single-teacher',
auth : public ,
method : 'POST'
users : public,
parameters : {
        id : string|required|MongoID,
},
details : 'GET DETAILS FOR A SINGLE USER'
},

{
url : '/api/home/get-all-testimonial',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL TESTIMONIAL RECORDS FROM DB'
},

{
url : '/api/home/get-popular-course',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL POPULAR COURSE RECORDS FROM DB'
},

{
url : '/api/home/get-popular-teacher',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL POPULAR TEACHER RECORDS FROM DB'
},

{
url : '/api/home/get-course-comment',
auth : public ,
method : 'POST'
users : public,
parameters : {
        course_id : string|required|Mongodb,

},
details : 'GET ALL COMMENTS FOR A SINGLE COURSE'
},

{
url : '/api/home/submit-contact-us',
auth : public ,
method : 'POST'
users : public,
parameters : {
        name : string|required,
        phone_number : string|required,
        email : string|email|required,
        subject : string|required,
        text : string|required,
},
details : 'USER/GUEST COULD CONTACT US THROUGH EMAIL SMTP SERVICE'
},

{
url : '/api/home/get-social-media',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL SOCIAL MEDIA RECORDS'
},

{
url : '/api/home/get-intro-section',
auth : public ,
method : 'POST'
users : public,
details : 'USER/GUEST COULD GET THE INTRO SECTION OF THE INDEX'
},

{
url : '/api/home/get-contact-information',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE CONTACT INFORMATION DETAILS'
},

{
url : '/api/home/get-about-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE ABOUT US PAGE DATA'
},

{
url : '/api/home/get-footer-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE FOOTER DATA'
},

{
url : '/api/home/get-all-exam',
auth : public ,
method : 'POST'
users : public,
details : 'GET ALL THE EXAM RECORD'
},

{
url : '/api/home/get-course-exam',
auth : public ,
method : 'POST'
users : public,
parameters : {
        course_id : string|required|MongoDBID,

},
details : 'GET SINGLE EXAM RECORD FOR A SINGLE COURSE'
},

{
url : '/api/home/get-free-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE INDEX FREE SECTION DATA'
},

{
url : '/api/home/get-rank-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE INDEX TOP RANK SECTION DATA'
},

{
url : '/api/home/get-statistic-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE INDEX STATISTICS SECTION DATA'
},

{
url : '/api/home/get-future-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE INDEX FUTURE COURSES SECTION DATA'
},

{
url : '/api/home/get-secondary-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE INDEX HOME SECTION DATA'
},

{
url : '/api/home/get-teacher-section',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE INDEX HOME TEACHER DATA'
},

{
url : '/api/home/get-all-media',
auth : public ,
method : 'POST'
users : public,
details : 'GET THE INDEX ALL MEDIA DATA'
},

{
url : '/api/home/get-single-exam',
auth : public ,
method : 'POST'
users : public,
parameters : {
        exam_id : string|required|MongoDBID,

},
details : 'GET SINGLE EXAM RECORD'
},
]
```

### WEB CONTROL ROUTE SPECIFICATIONS

```

Routes => [
{
url : '/api/web-control/update-count-down',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        count_down : datetime|required,
        count_down_text : string|required,
},
details : 'ADMIN COULD UPDATE THE DATETIME VALUE'
},

{
url : '/api/web-control/get-all-grade',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL THE GRADE'
},

{
url : '/api/web-control/get-single-grade',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE GRADE'
},

{
url : '/api/web-control/create-new-grade',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        title : string|required,
},
details : 'ADMIN COULD CREATE NEW GRADE ITEM'
},

{
url : '/api/web-control/update-single-grade',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        title : string|required,
        id : string|required|MongoID,
},
details : 'ADMIN COULD UPDATE SINGLE GRADE ITEM'
},

{
url : '/api/web-control/delete-single-grade',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE GRADE ITEM'
},

{
url : '/api/web-control/get-all-category',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL THE CATEGORY'
},

{
url : '/api/web-control/get-single-category',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE CATEGORY'
},

{
url : '/api/web-control/create-new-category',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        title : string|required,
},
details : 'ADMIN COULD CREATE NEW CATEGORY ITEM'
},

{
url : '/api/web-control/update-single-category',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        title : string|required,
        id : string|required|MongoID,
},
details : 'ADMIN COULD UPDATE SINGLE CATEGORY ITEM'
},

{
url : '/api/web-control/delete-single-category',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE CATEGORY ITEM'
},

{
url : '/api/web-control/get-all-province',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL THE PROVINCE'
},

{
url : '/api/web-control/get-single-province',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE PROVINCE'
},

{
url : '/api/web-control/create-new-province',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        name : string|required,
},
details : 'ADMIN COULD CREATE NEW PROVINCE ITEM'
},

{
url : '/api/web-control/update-single-province',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        name : string|required,
        id : string|required|MongoID,
},
details : 'ADMIN COULD UPDATE SINGLE PROVINCE ITEM'
},

{
url : '/api/web-control/delete-single-province',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE PROVINCE ITEM'
},

{
url : '/api/web-control/get-all-city',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL THE CITY'
},

{
url : '/api/web-control/get-single-city',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE CITY'
},

{
url : '/api/web-control/create-new-city',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        name : string|required,
        province_id : string|required|MongoID,

},
details : 'ADMIN COULD CREATE NEW CITY ITEM'
},

{
url : '/api/web-control/update-single-city',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        name : string|required,
        province_id : string|required|MongoID,
},
details : 'ADMIN COULD UPDATE SINGLE CITY ITEM'
},

{
url : '/api/web-control/delete-single-city',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE CITY ITEM'
},

{
url : '/api/web-control/get-all-testimonial',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL TESTIMONIAL RECORDS'
},

{
url : '/api/web-control/get-single-testimonial',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE TESTIMONIAL'
},

{
url : '/api/web-control/create-new-testimonial',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        name : string|required,
        text : string|required,
        index : string|int|required,
        image : mimetype:img|optional,
},
details : 'ADMIN COULD CREATE NEW TESTIMONIAL ITEM'
},

{
url : '/api/web-control/update-single-testimonial',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        name : string|required,
        text : string|required,
        index : string|int|required,
        image : mimetype:img|optional,
},
details : 'ADMIN COULD UPDATE SINGLE TESTIMONIAL ITEM'
},

{
url : '/api/web-control/delete-single-testimonial',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE TESTIMONIAL ITEM'
},

{
url : '/api/web-control/get-popular-course',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL POPULAR COURSE RECORDS'
},

{
url : '/api/web-control/single-popular-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE POPULAR COURSE'
},

{
url : '/api/web-control/create-popular-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        course_id : string|required|MongoID,
        index : string|int|required,
},
details : 'ADMIN COULD CREATE NEW POPULAR COURSE ITEM'
},

{
url : '/api/web-control/update-popular-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        course_id : string|required|MongoID,
        index : string|int|required,
},
details : 'ADMIN COULD UPDATE SINGLE POPULAR COURSE ITEM'
},

{
url : '/api/web-control/delete-popular-course',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE POPULAR COURSE ITEM'
},


{
url : '/api/web-control/get-popular-teacher',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL POPULAR TEACHER RECORDS'
},

{
url : '/api/web-control/single-popular-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE POPULAR TEACHER'
},

{
url : '/api/web-control/create-popular-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        teacher_id : string|required|MongoID,
        index : string|int|required,
},
details : 'ADMIN COULD CREATE NEW POPULAR TEACHER ITEM'
},

{
url : '/api/web-control/update-popular-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        teacher_id : string|required|MongoID,
        index : string|int|required,
},
details : 'ADMIN COULD UPDATE SINGLE POPULAR TEACHER ITEM'
},

{
url : '/api/web-control/delete-popular-teacher',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE POPULAR TEACHER ITEM'
},

{
url : '/api/web-control/get-social-media',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN GET ALL SOCIAL MEDIA RECORDS'
},

{
url : '/api/web-control/single-social-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE SOCIAL MEDIA'
},

{
url : '/api/web-control/create-social-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        name : string|required,
        type : string|required,
        link : string|URL|required,
},
details : 'ADMIN COULD CREATE NEW SOCIAL MEDIA ITEM'
},

{
url : '/api/web-control/update-social-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
        name : string|required,
        type : string|required,
        link : string|URL|required,
},
details : 'ADMIN COULD UPDATE SINGLE SOCIAL MEDIA ITEM'
},

{
url : '/api/web-control/delete-social-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoID,
},
details : 'ADMIN COULD DELETE SINGLE SOCIAL MEDIA ITEM'
},

{
url : '/api/web-control/update-intro-section',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        intro_subtitle : string|required,
        intro_button : string|required,
        intro_link : string|URL|required,
        intro_image : Mimetype:img|optional,
},
details : 'ADMIN COULD UPDATE THE INTRO SECTION OF THE INDEX'
},

{
url : '/api/web-control/update-contact-information',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        address : string|required,
        phone_number : string|required,
        land_line : string|required,
        fax_number : string|required,
        email : string|email|required,
},
details : 'ADMIN COULD UPDATE THE CONTACT INFORMATION'
},

{
url : '/api/web-control/update-footer-section',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        footer_text : string|required,
        footer_logo : Mimetype:img|optional,

},
details : 'ADMIN COULD UPDATE THE FOOTER SECTION'
},

{
url : '/api/web-control/update-about-section',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        about_us : string|required,
},
details : 'ADMIN COULD UPDATE THE ABOUT US PAGE DETAILS'
},

{
url : '/api/web-control/get-all-media',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN COULD GET ALL MEDIA RECORD'
},

{
url : '/api/web-control/get-single-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE MEDIA'
},

{
url : '/api/web-control/create-new-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        link : string|required,
        image : MIMETYPE:img|required
},
details : 'ADMIN COULD CREATE NEW MEDIA RECORD'
},

{
url : '/api/web-control/update-single-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoDBID,
        link : string|required,
        image : MIMETYPE:img|optional
},
details : 'ADMIN COULD UPDATE SINGLE MEDIA RECORD'
},

{
url : '/api/web-control/delete-single-media',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoDBID,
},
details : 'ADMIN COULD DELETE SINGLE MEDIA RECORD'
},

{
url : '/api/web-control/update-secondary-section',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        secondary_title : string|required,
        secondary_text : string|required,
        secondary_image : MIMETYPE:img|optional
,
},
details : 'ADMIN COULD UPDATE INDEX SECONDARY SECTION'
},

{
url : '/api/web-control/update-teacher-section',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        teacher_title : string|required,
        teacher_subtitle : string|required,
        teacher_text : string|required,
},
details : 'ADMIN COULD UPDATE INDEX TEACHER SECTION'
},

{
url : '/api/web-control/update-free-section',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        free_title : string|required,
        free_subtitle : string|required,
        free_text : string|required,
        free_btn_text : string|required,
        free_btn_link : string|URL|required,
        free_video_link : string|Ifram|required,
},
details : 'ADMIN COULD UPDATE INDEX EXPRIENCE FOR FREE SECTION'
},

{
url : '/api/web-control/update-rank-section',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        rank_title : string|required,
        rank_text : string|required,
        rank_image_title : string|required,

},
details : 'ADMIN COULD UPDATE INDEX TOP RANK SECTION'
},

{
url : '/api/web-control/get-top-rank',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN COULD GET INDEX TOP RANK SECTION CAROUSEL'
},

{
url : '/api/web-control/single-top-rank',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|Mongodb|required,
},
details : 'ADMIN COULD GET THE RECORD FOR A SINGLE TOP RANK'
},

{
url : '/api/web-control/create-top-rank',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        title : string|required,
        subtitle : string|required,
        image : MIMETYPE:img|optional,

},
details : 'ADMIN COULD CREATE INDEX TOP RANK SECTION CAROUSEL'
},

{
url : '/api/web-control/update-top-rank',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoDB,
        title : string|required,
        subtitle : string|required,
        image : MIMETYPE:img|optional,

},
details : 'ADMIN COULD UPDATE INDEX TOP RANK SECTION CAROUSEL'
},

{
url : '/api/web-control/delete-top-rank',
auth : private ,
method : 'POST'
users : admin,
parameters : {
        id : string|required|MongoDB,
},
details : 'ADMIN COULD DELETE INDEX TOP RANK SECTION CAROUSEL'
},
]
```

## License

[GPLV3](https://choosealicense.com/licenses/gpl-3.0/)
