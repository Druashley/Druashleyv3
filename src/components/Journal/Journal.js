import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";
import Axios from "axios";
import JournalPost from "./JournalPost";

export default function Journal() {
  const { userData } = useContext(UserContext);
  const [journalTitle, setJournalTitle] = useState();
  const [journalBody, setJournalBody] = useState();
  const [error, setError] = useState();
  const [journalPosts, setJournalPosts] = useState();

  const adminCheck = () => {
    console.log(userData.role);

    if (userData.role === "Admin") {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const getJournalPosts = async () => {
      const journalPostsRes = await Axios.get("http://localhost:8080/journal/");

      setJournalPosts({
        posts: journalPostsRes.data.journalPosts,
      });
    };
    getJournalPosts();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const journalPost = { journalTitle, journalBody };
      await Axios.post("http://localhost:8080/journal", journalPost);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto min-h-screen pt-14">
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      {adminCheck() ? (
        <div>
          <form onSubmit={submit} autoComplete="off">
            <input
              className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gradient-to-r from-blue-100  to-pink-100 border focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-inset-2"
              id="journal-title"
              type="title"
              placeholder="Title"
              onChange={(e) => {
                setJournalTitle(e.target.value);
              }}
            />
            <textarea
              className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gradient-to-r from-blue-100  to-pink-100 border focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-inset-2"
              id="journal-body"
              type="body"
              placeholder="Title"
              onChange={(e) => {
                setJournalBody(e.target.value);
              }}
            />
            <input
              type="submit"
              value="Submit"
              className="w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform bg-blue-500 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800"
            />
          </form>
        </div>
      ) : (
        ""
      )}
      {journalPosts && journalPosts.posts.length > 0
        ? journalPosts.posts.map((post) => {
            return (
              <JournalPost
                journalTitle={post.journalTitle}
                journalBody={post.journalBody}
              />
            );
          })
        : "No Journal Posts"}
    </div>
  );
}
