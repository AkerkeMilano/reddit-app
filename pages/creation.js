import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client/core";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const POST_MUTATION = gql`
  mutation PostMutation($url: String!, $description: String!) {
    post(url: $url, description: $description) {
      id
    }
  }
`;

const CreateNewPost = () => {
  const [formState, setFormState] = useState({
    url: "",
    description: "",
  });

  const [post] = useMutation(POST_MUTATION, {
    variables: {
      url: formState.url,
      description: formState.description,
    },
  });

  const router = useRouter();
  const submitHandler = () => {
    router.push("/");
  };
  return (
    <div className="create-post">
      <h1>Create a new post</h1>
      <TextField
        id="outlined-basic"
        label="Enter url"
        value={formState.url}
        onChange={(e) =>
          setFormState({
            ...formState,
            url: e.target.value,
          })
        }
        type="text"
      />
      <TextField
        id="outlined-basic"
        label="Enter description"
        value={formState.description}
        onChange={(e) =>
          setFormState({
            ...formState,
            description: e.target.value,
          })
        }
        type="text"
      />
      <Button
        className="pointer button"
        disabled={formState.url.length === 0 && formState.description.length === 0}
        onClick={(e) => {
          e.preventDefault();
          post();
          submitHandler();
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default CreateNewPost;
