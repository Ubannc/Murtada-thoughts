import React, { useState } from 'react';
import { useAdminStore } from '../../store/adminStore';

const AdminLogin: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const authenticate = useAdminStore((state) => state.authenticate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authenticate(token)) {
      onClose();
    } else {
      setError('Invalid token');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <h2 className="text-2xl font-serif mb-6 text-center">Admin Access</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="token" className="block text-sm font-medium text-neutral-700 mb-1">
              Enter Access Token
            </label>
            <input
              type="password"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
              placeholder="Enter your access token"
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-neutral-600 hover:text-neutral-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;