import React from 'react';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary-dark">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full rounded-md border-neutral bg-white px-4 py-2 text-primary-dark focus:border-accent focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary-dark">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-neutral bg-white px-4 py-2 text-primary-dark focus:border-accent focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-dark">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-neutral bg-white px-4 py-2 text-primary-dark focus:border-accent focus:ring-accent"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-primary-dark px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}