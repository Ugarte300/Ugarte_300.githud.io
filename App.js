import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PostForm from './components/PostForm';
import Post from './components/Post';
import { auth } from './firebase';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [totalLikes, setTotalLikes] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleLike = () => {
    setTotalLikes(totalLikes + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <div className="bg-blue-600 text-white py-4 shadow-md">
        <Header />
      </div>

      <main className="container mx-auto p-4">
        {user ? (
          <>
            <section className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <PostForm addPost={addPost} />
            </section>

            <section>
              {posts.length === 0 ? (
                <p className="text-center text-gray-500">No hay publicaciones aún.</p>
              ) : (
                posts.map((post, index) => (
                  <Post key={index} content={post} onLike={handleLike} />
                ))
              )}
            </section>

            <footer className="mt-10 text-center text-sm text-gray-500">
              Total de Me gusta: {totalLikes}
            </footer>
          </>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-10">
            Por favor, inicia sesión para ver y crear publicaciones.
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
