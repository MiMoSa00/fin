import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth object from your firebase.ts file

interface SignupProps {
  onSubmit: (email: string, password: string, confirmPassword: string, dob: string, phone: string) => void;
  onCancel: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      onSubmit(email, password, confirmPassword, dob, phone);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
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
      <div className="relative mb-4">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility2}
        >
          {showPassword2 ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <input
        type="date"
        placeholder="Date of Birth"
        className="px-3 py-2 mb-4 border border-gray-300 rounded-md w-full"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="px-3 py-2 mb-4 border border-gray-300 rounded-md w-full"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSignup} className="bg-teal-700 text-white px-4 py-2 rounded-md">Sign Up</button>
      <button onClick={onCancel} className="ml-4 text-gray-500">Cancel</button>
    </div>
  );
};

export default Signup;