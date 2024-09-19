"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import {
  faGoogle,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="text-black flex flex-col gap-4">
        <button
          className="text-lg font-bold bg-white py-2 px-3 rounded-lg"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            signIn("google");
          }}
        >
          <>
            <FontAwesomeIcon icon={faGoogle} />
            <span className="ml-3">Login with Google</span>
          </>
        </button>
        <button
          className="text-lg font-bold bg-white py-2 px-3 rounded-lg"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            signIn("github");
          }}
        >
          <>
            <FontAwesomeIcon icon={faGithub} />
            <span className="ml-3">Login with Github</span>
          </>
        </button>
        <button
          className="text-lg font-bold bg-white py-2 px-3 rounded-lg"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            signIn("twitter");
          }}
        >
          <>
            <FontAwesomeIcon icon={faTwitter} />
            <span className="ml-3">Login with Twitter</span>
          </>
        </button>
      </div>
      {loading && <p className="mt-3 font-bold text-center">Please wait...</p>}
    </div>
  );
};

export default LoginForm;
