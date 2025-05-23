import React, { useState } from 'react';

const PostForm = ({ onAddPost }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() || image) {
      onAddPost({ text, image });
      setText('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows="3"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        accept="image/*"
        className="mb-3"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Publicar
      </button>
    </form>
  );
};

export default PostForm;