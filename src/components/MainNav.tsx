import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0(); // redirects the user to the Auth0 Universal Login page.

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          variant="outline"
          className="font-bold hover:text-orange-500 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
          //After successful authentication, the user is redirected back to your application
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
