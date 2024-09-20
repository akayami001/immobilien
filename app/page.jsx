import ListPage from "./(route)/listPage";
import SinglePage from "./(route)/singlePage";
import Login from "./(route)/login";
import Register from "./(route)/register";
import ProfilePage from "./(route)/profilePage";
import ProfileUpdatePage from "./(route)/profileUpdatePage";
import NewPostPage from "./(route)/newPost";

export default function Home() {
  return (
    <main className="container">
      <ListPage  />
      <SinglePage />
      {/* <Login />
      <Register /> */}
      {/* //AUTH pages */}
      <ProfilePage />
      <ProfileUpdatePage  />
      <NewPostPage  />
    </main>
  );
}
