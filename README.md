## Next JS Web App Template

This is a template for Next JS web application with Firebase hosting and GitHub Actions. With this project you can simply create Next JS project and deploy it to the Firebase hosting with GitHub Actions. Following are main steps that you need to follow to configure and deploy your Next JS application to Firebase.

### Steps

1. Clone the project
2. Execute `npm install` to install the dependencies
3. Execute `npm run dev`. It will start your application on the browser
4. Go to Firebase console and create a project (You have to enable **Pay as you go** option)
5. Finish the Firebase project creation
6. In your local terminal run `npx firebase login` and login to your Google account which you used to create the Firebase project
7. Execute `npx firebase projects:list` to list your projects under your account
8. Copy the **Project ID** from the table and paste it to `.firebaserc`

```
{
  "projects": {
    "default": "{{ Project ID }}"
  }
}
```

9. Execute `npx firebase login:ci` to get the token
10. Add your token to **Settings -> Secrets -> [New Repository Secret]**. Name the token as **FIREBASE_TOKEN**
