import { useContact } from "../hooks/useContact";
import { FaTrash } from "react-icons/fa";

export default function InboxPage() {
  const { contacts, loading, handleDelete } = useContact();

  if (loading) return (
    <div className="flex justify-center mt-20">
      <span className="loading loading-spinner loading-lg" />
    </div>
  );

  return (
    <div className="px-5 md:px-25 mt-20 pb-20">
      <h1 className="font-bold text-3xl mb-8">Inbox Pesan</h1>

      {contacts.length === 0 ? (
        <p className="text-moku">Belum ada pesan masuk.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.objectId}
              className="card bg-base-100 border border-base-200 p-5"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">
                    {contact.firstName} {contact.lastName}
                  </p>
                  <p className="text-sm text-gray-400">{contact.email}</p>
                  <p className="text-xs text-gray-300 mt-1">
                    {new Date(contact.created).toLocaleDateString("id-ID", {
                      day: "numeric", month: "long", year: "numeric",
                      hour: "2-digit", minute: "2-digit"
                    })}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(contact.objectId)}
                  className="btn btn-sm btn-error text-white"
                >
                  <FaTrash />
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed">{contact.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}