import AuthForm from "./AuthForm";

interface Props {
  type: "login" | "signup";
  switchForm: () => void;
}

export default function AuthCard({ type, switchForm }: Props) {
  return (
    <div className="">
      {type === "login" ? (
        <>
          <h2 className="text-2xl font-bold mb-2">LOGIN HERE</h2>
          <p className="text-gray-500 mb-6">Enter your credentials below!</p>
          <AuthForm type="login" />
          <p className="text-sm mt-4">
            Don’t have an account yet?{" "}
            <span
              onClick={switchForm}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Signup
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2">SIGN UP HERE</h2>
          <p className="text-gray-500 mb-6">Enter your credentials below!</p>
          <AuthForm type="signup" />
          <p className="text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={switchForm}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </>
      )}
    </div>
  );
}
