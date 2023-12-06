  const mockUserArray = [
    {
        "_id": "656939e77065f16bf01a3199",
        "username": "@@!!"
    },
    {
        "_id": "656939e77065f16bf01a3197",
        "username": "mr admin"
    },
    {
        "_id": "656944274bf2f0042f40dc3f",
        "username": "hello"
    },
    {
        "_id": "656e7bde02e529b8c31c4ec8",
        "username": "Larry Loganberry"
    }
]

  const mockUser = {
    "_id": "656e7bde02e529b8c31c4ec8",
    "username": "Larry Loganberry"
}

  const mockPostArray = [
    {
        "_id": "656939e97065f16bf01a319c",
        "title": "test post",
        "copy": "lorem ipsum ..........",
        "author": "656939e77065f16bf01a3197",
        "date": "2023-12-01T01:42:01.486Z",
        "tags": [
            "tag1",
            "tag2"
        ],
        "comments": [],
        "likes": [
            "656939e77065f16bf01a3199"
        ],
        "status": "published",
        "__v": 0
    },
    {
        "_id": "656fb04ea4b4c74d832b472c",
        "title": "test",
        "copy": "lorem ipsum",
        "author": "656939e77065f16bf01a3199",
        "date": "2023-12-05T23:20:46.445Z",
        "tags": [
            "tag 1"
        ],
        "comments": [
            "656fcac2ea44e0c92b6280e1",
            "656fd9af0dd4c9ae85bace5b"
        ],
        "likes": [],
        "status": "published",
        "__v": 1
    },
    {
        "_id": "656fb15ba4b4c74d832b472e",
        "title": "test",
        "copy": "lorem ipsum",
        "author": "656939e77065f16bf01a3199",
        "date": "2023-12-05T23:25:15.376Z",
        "tags": [
            "tag 1"
        ],
        "comments": [],
        "likes": [],
        "status": "published",
        "__v": 0
    }
]

  const mockPost = {
    "_id": "656fb04ea4b4c74d832b472c",
    "title": "test",
    "copy": "lorem ipsum",
    "author": "656939e77065f16bf01a3199",
    "date": "2023-12-05T23:20:46.445Z",
    "tags": [
        "tag 1"
    ],
    "comments": [
        {
            "_id": "656fcac2ea44e0c92b6280e1",
            "author": "656939e77065f16bf01a3199",
            "copy": "Great post!",
            "deprecated": false,
            "date": "2023-12-06T04:04:33.426Z"
        },
        {
            "_id": "656ff2bd3c07d222900048ef",
            "date": "2023-12-06T04:04:13.378Z",
            "copy": "new comment",
            "author": "656939e77065f16bf01a3197",
            "deprecated": false,
            "__v": 0
        },
        {
            "_id": "656ff2c83c07d222900048f3",
            "date": "2023-12-06T04:04:24.827Z",
            "copy": "wow! very cool",
            "author": "656939e77065f16bf01a3197",
            "deprecated": false,
            "__v": 0
        }
    ],
    "likes": [],
    "status": "published",
    "__v": 3
}

  const mockCommentArray = [
    {
        "_id": "656fcac2ea44e0c92b6280e1",
        "author": "656939e77065f16bf01a3199",
        "copy": "Great post!",
        "deprecated": false,
        "date": "2023-12-06T04:05:37.591Z"
    },
    {
        "_id": "656ff2bd3c07d222900048ef",
        "date": "2023-12-06T04:04:13.378Z",
        "copy": "thanks for sharing",
        "author": "656939e77065f16bf01a3197",
        "deprecated": false,
        "__v": 0
    },
    {
        "_id": "656ff2c83c07d222900048f3",
        "date": "2023-12-06T04:04:24.827Z",
        "copy": "wow! very cool",
        "author": "656939e77065f16bf01a3197",
        "deprecated": false,
        "__v": 0
    }
]

  const mockComment = [
    {
        "_id": "656fcac2ea44e0c92b6280e1",
        "author": "656939e77065f16bf01a3199",
        "copy": "Great post!",
        "deprecated": false,
        "date": "2023-12-06T03:59:10.934Z"
    }
]

export { mockComment, mockCommentArray, mockPost, mockPostArray, mockUser, mockUserArray }