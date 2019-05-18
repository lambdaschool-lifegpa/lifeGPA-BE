# lifeGPA-BE



**/--------------------------------------------/ REGISTER /---------------------------------------/**

###

**Register a User**
_method url_: `/api/register`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name         | type   | required | description    |
| ------------ | ------ | -------- | -------------- |
| `username`   | String | Yes      | Must be unique |
| `fullName`   | String | Yes      |                |
| `password`   | String | Yes      |                |
| `email`      | String | No       |                |
| `userImgUrl` | String | No       |                |

#### Example

```
  {
    "username": "ant305",
    "password": "1234",
    "fullName": "Anthony Johnson",
    "email": "anthonyjohnson_dev@icloud.com",
    "userImgUrl": "image.jpg"
  }
```

#### Response

##### 201 (created)

###### Example Response

```
  {
    "id": 2
    "username": "ant305",
    "password": "1234",
    "fullName": "Anthony Johnson",
    "email": "anthonyjohnson_dev@icloud.com",
    "userImgUrl": "image.jpg"
  }
```

##### 400 (Bad Request)

```
  {
    "errorMessage": "missing ${itemMissing}"
  }
```

**/--------------------------------------------/ LOGIN /---------------------------------------/**

### **Login a user**

_method url_: `/api/login`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description             |
| ---------- | ------ | -------- | ----------------------- |
| `username` | String | Yes      | must be registered user |
| `password` | String | Yes      |                         |

#### Example

```
  {
    "username": "ant305",
    "password": "1234",
  }
```

#### Response

##### 200 (ok)

> no issues logging in

###### Example response

```
{
    "message": "Welcome siratl! Token registered...",
    "user": {
        "id": 1,
        "username": "ant305",
        "password": "$2a$11$YNf76GrgcFn6YJsQgmr1luICjYOdIz.Y3cEeve1fG9YYRn6kCewFa",
        "fullName": "Anthony Johnson",
        "email": "anthonyjohnson_dev@icloud.com",
        "userImgUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybmk",
}
```

##### 401 (Unauthorized)

```
  {
    errorMessage: 'Invalid Credentials, try again...'
  }
```

##### 400 (Bad Request)

```
{
  errorMessage: "No valid user credentials provided, please register..."
}
```

**/--------------------------------------------/ ALL USERS /-----------------------------------------/**

### **Get all Users**

_method url_: `/api/users`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
     "id": 2,
     "username": "ant305",
     "password": "$2a$12$UzYfINUnqfZh2n180pBswORvPCIrwHKp3d/MEZ69DaRxoLTYj26UG",
     "fullName": "Anthony Johnson",
     "email": null,
     "userImgUrl": null
  },
  {
     "id": 3,
     "username": "liz1121",
     "password": "$2a$12$5.flIIREO8kVSwAGdL2iWO1IUKaaN7VgKN9zEX/Z7XXygBupMSQ0W",
     "fullName": "Elizabeth Johnson",
     "email": "lizdoyle1121@gmail.com",
     "userImgUrl": ""
  },
]
```

**/--------------------------------------------/ SINGLE USER /-----------------------------------/**

### **Get a single User**

_method url_: `/api/users/:id`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 2,
    "username": "ant305",
    "password": "$2a$12$UzYfINUnqfZh2n180pBswORvPCIrwHKp3d/MEZ69DaRxoLTYj26UG",
    "fullName": "Anthony Johnson",
    "email": null,
    "userImgUrl": null
  }
]
```

**/--------------------------------------------/ CREATE CATEGORY /-----------------------------------/**

### **Create a Category**

## UPDATED: **You can create a category of the logged in user without hard coding the userId**

_method url_: `/api/categories`

_http method_: **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name            | type    | required | description                                         |
| --------------- | ------- | -------- | --------------------------------------------------- |
| `categoryTitle` | String  | Yes      |                                                     |
| `color`         | String  | Yes      |                                                     |
| `userId`        | Integer | Yes      | No need to assign! Derived from user making request |

#### Example

```
  {
    "categoryTitle": "Physical Endurance",
    "color": "red",
    "userId": 2,
  }
```

#### Response

##### 201 (created)

###### Example Response

```
 {
    "id": 3,
    "categoryTitle": "Physical Endurance",
    "color": "red",
    "userId": 2
  },
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
{
    "message": "No token provided! You must login to perform action."
}
```

##### 500 (Server Error)

###### Example Response

```
{
    "errorMessage": "Category could not be created."
}
```

**/------------------------------------------/ ALL CATEGORIES /-------------------------------------/**

### **Get Categories**

## UPDATED: **This will only display habits of the logged in user without making an extra :id query**

_method url_: `/api/categories`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example response

```
{
    "id": 2,
    "categoryTitle": "Crossfit Training",
    "color": "red",
    "userId": 1
}
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/--------------------------------------------/ CREATE HABIT /-----------------------------------/**

### **Create a Habit**

_method url_: `/api/habits`

_http method_: **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name               | type    | required | description                                         |
| ------------------ | ------- | -------- | --------------------------------------------------- |
| `habitTitle`       | String  | Yes      |                                                     |
| `categoryId`       | Integer | Yes      |                                                     |
| `userId`           | Integer | Yes      | No need to assign! Derived from user making request |
| `completed`        | Boolean | No       |                                                     |
| `completionPoints` | Integer | No       |                                                     |
| `created_at`       | String  | No       |                                                     |

#### Example

```
  {
    "habitTitle": "Run 10 miles",
    "categoryId": 1,
  }
```

#### Response

##### 201 (created)

###### Example Response

```
  {
    "id": 1,
    "habitTitle": "Run 10 miles",
    "completed": 0 (binary for false),
    "completionPoints": 0,
    "userId": 2,
    "categoryId": 1,
    "created_at": "2019-03-13 20:47:27"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/------------------------------------------/ USER HABITS /-------------------------------------/**

### **Get a User with all Habits**

_method url_: `/api/users/habits/:id (id meaning userId)`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 2,
    "username": "ant305",
    "password": "$2a$12$xEMuC6KExFMmz95p6jIAoe4CYT1oDPGBPHpxjR4FjIMmUGO09iR.m",
    "fullName": "Anthony Johnson",
    "email": null,
    "userImgUrl": null,
    "habits": [
        {
            "id": 2,
            "habitTitle": "Run 10 miles",
            "completed": false,
            "completionPoints": 0,
            "userId": 2,
            "categoryId": 1,
            "created_at": "2019-03-12 10:07:27"
        },
        {
            "id": 3,
            "habitTitle": "Eat Fruit",
            "completed": false,
            "completionPoints": 0,
            "userId": 2,
            "categoryId": 3,
            "created_at": "2019-03-12 17:57:27"
        },
        {
            "id": 4,
            "habitTitle": "Study React",
            "completed": false,
            "completionPoints": 0,
            "userId": 2,
            "categoryId": 4,
            "created_at": "2019-01-12 12:41:27"
        },
        ]
    }
]
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

##### 404 (Not Found)

###### Example Response

```
  {
    "message": "User Not Found"
  }
```

**/------------------------------------------/ ALL HABITS /-------------------------------------/**

### **Get Habits**

## UPDATED: **This will only display habits of the logged in user without making an extra :id query**

_method url_: `/api/habits`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example response

```
{
    "id": 2,
    "habitTitle": "Run 10 miles",
    "completed": false,
    "completionPoints": 0,
    "userId": 1,
    "categoryId": 1,
    "created_at": "2019-03-12 10:07:27"
}
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/------------------------------------------/ USER CATEGORIES /-------------------------------------/**

### **Get a User with all Categories**

_method url_: `/api/users/categories/:id (id meaning userId)`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 2,
    "username": "ant305",
    "password": "$2a$12$xEMuC6KExFMmz95p6jIAoe4CYT1oDPGBPHpxjR4FjIMmUGO09iR.m",
    "fullName": "Anthony Johnson",
    "email": null,
    "userImgUrl": null,
    "category": [
        {
          "id": 1,
          "categoryTitle": "Physical Fitness",
          "color": "red",
          "userId": 1
        },
        {
          "id": 3,
          "categoryTitle": "Physical Endurance",
          "color": "red",
          "userId": 1
        },

        ]
    }
]
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

##### 404 (Not Found)

###### Example Response

```
  {
    "message": "User Not Found"
  }
```

**/------------------------------------------/ CATEGORY HABITS /-------------------------------------/**

### **Get Habits by Category**

_method url_: `/api/categories/habits/:id (id meaning categoryId)`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 2,
    "categoryTitle": "Physical Fitness",
    "color": "red",
    "habits": [
        {
            "id": 1,
            "habitTitle": "Run 10 miles",
            "completed": false,
            "completionPoints": 0,
            "userId": 3,
            "categoryId": 2,
            "created_at": "2019-01-22 10:45:31"
        },
        {
            "id": 2,
            "habitTitle": "Walk 5 miles",
            "completed": false,
            "completionPoints": 0,
            "userId": 3,
            "categoryId": 2,
            "created_at": "2019-04-02 06:37:44"
        },
        {
            "id": 3,
            "habitTitle": "Crossfit Training",
            "completed": false,
            "completionPoints": 0,
            "userId": 3,
            "categoryId": 2,
            "created_at": "2019-02-14 18:18:27"
        },
        ]
    }
]
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/----------------------------------------/ EDIT USER ACCOUNT /------------------------------------/**

### **Edit a User Account**

_method url_: `/api/users/:id`

_http method_: **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name         | type   | required | description    |
| ------------ | ------ | -------- | -------------- |
| `username`   | String | No       | Must be unique |
| `fullName`   | String | No       |                |
| `password`   | String | No       |                |
| `email`      | String | No       |                |
| `userImgUrl` | String | No       |                |

#### Example

```
  {
    "username": "ant305",
    "password": "cheeseSteak123",
    "fullName": "Anthony Johnson",
  }
```

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"Your account has been updated"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "You are not authorized to edit this Account, Please Login!"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/------------------------------------------/ DELETE ACCOUNT /-------------------------------------/**

### **Delete an Account**

_method url_: `/api/users/:id`

_http method_: **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"Your account has been deleted"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "You are not authorized to delete this account"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/------------------------------------------/ GET HABIT /----------------------------------------/**

### **Get a Single Habit**

_method url_: `/api/habits/:id (as in id of the habit)`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example response

```
{
    "id": 12,
    "habitTitle": "Run 10 miles",
    "completed": false,
    "completionPoints": 0,
    "userId": 2,
    "categoryId": 1,
}
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/------------------------------------------/ EDIT HABIT /---------------------------------------/**

### **Edit a Habit**

_method url_: `/api/habits/:id`

_http method_: **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name               | type    | required | description |
| ------------------ | ------- | -------- | ----------- |
| `habitTitle`       | String  | No       |             |
| `completed`        | Boolean | No       |             |
| `completionPoints` | Integer | No       |             |

#### Example

```
  {
    "habitTitle": "Run 5 miles",
  }
```

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"Your Habit has been Updated."
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "You are not authorized to edit this habit."
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

**/------------------------------------------/ EDIT CATEGORY /-------------------------------------/**

### **Edit a Category**

_method url_: `/api/categories/:id`

_http method_: **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Body

| name            | type   | required | description |
| --------------- | ------ | -------- | ----------- |
| `categoryTitle` | String | No       |             |
| `color`         | String | No       |             |

#### Example

```
  {
    "categoryTitle": "Physical Fitness",
  }
```

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"Your Category has been Updated."
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "You are not authorized to edit this category."
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

##### 500 (Server Error)

###### Example Response

```
  {
    "message": "Does not exist"
  }
```

**/------------------------------------------/ DELETE HABIT /---------------------------------------/**

### **Delete a Habit**

_method url_: `/api/habits/:id (id of the habit)`

_http method_: **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"Habit successfully deleted"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "You are not authorized to delete this Habit"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

##### 404 (Not Found)

###### Example Response

```
  {
    "errorMessage": "Habit does not exist."
  }
```

**/------------------------------------------/ DELETE CATEGORY /---------------------------------------/**

### **Delete a Category**

_method url_: `/api/categories/:id (id of the category)`

_http method_: **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example Response

```
  {
    "message":"Category successfully deleted"
  }
```

##### 401 (Unauthorized)

###### Example Response

```
  {
    "errorMessage": "You are not authorized to delete this Category"
  }
```

##### 403 (Forbidden)

###### Example Response

```
  {
    "message": "Invalid token"
  }
```

##### 404 (Not Found)

###### Example Response

```
  {
    "errorMessage": "Category does not exist."
  }
```