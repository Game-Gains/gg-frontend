import React, { useState } from 'react';

interface CreateUserModalProps {
  onClose: () => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  console.log('backend url ', backendUrl);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('email', email);
    console.log('backend url ', backendUrl);

    try {
      const response = await fetch(`http://localhost:3000/users/create`, {
        method: 'POST', // Specify the method
        headers: {
          'Content-Type': 'application/json', // Specify content type
        },
        body: JSON.stringify({ "username": username, password: "password", email: "email"}),
      });

      console.log('response', response)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse the response data
      console.log('User created:', data); // Handle the response data (e.g., success message)
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error creating user:', error);
    }
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg shadow-lg w-96 p-6 relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
          onClick={onClose}
        >
          &times; {/* Close icon */}
        </button>
        <h2 className="text-xl font-semibold mb-4 text-white-700">Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">
              Username:
            </label>

            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">
              Email:
            </label>

            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">
              Password:
            </label>

            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="button" 
              onClick={onClose} 
              className="mr-2 px-4 py-2 bg-gray-300 text-white-700 rounded-md"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"

            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;