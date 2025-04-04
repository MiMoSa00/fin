import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth object from your firebase.ts file

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      onSubmit(email, password);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="px-3 py-2 mb-4 border border-gray-300 rounded-md w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="relative mb-4">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <button onClick={handleLogin} className="bg-teal-700 text-white px-4 py-2 rounded-md">Login</button>
      <button onClick={onCancel} className="ml-4 text-gray-500">Cancel</button>
    </div>
  );
};

export default Login;