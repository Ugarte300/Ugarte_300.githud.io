import React, { useState } from 'react';

const Post = ({ post, onLike }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-4">
      {post.image && (
        <img 
          src={URL.createObjectURL(post.image)} 
          alt="Post" 
          className="w-full h-auto rounded mb-3"
        />
      )}
      <p className="mb-3">{post.text}</p>
      <div className="flex items-center mb-3">
        <button 
          onClick={() => {
            setLikes(likes + 1);
            onLike();
          }}
          className="flex items-center text-gray-700"
        >
          <span className="mr-1">👍</span> {likes}
        </button>
      </div>
      <div className="border-t pt-3">
        <h3 className="font-semibold mb-2">Comentarios:</h3>
        {comments.map((comment, index) => (
          <p key={index} className="text-sm mb-1">- {comment}</p>
        ))}
        <div className="flex mt-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Añade un comentario..."
            className="flex-grow p-1 border border-gray-300 rounded-l"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-3 rounded-r"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;