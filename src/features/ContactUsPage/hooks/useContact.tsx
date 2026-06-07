import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api/useContactApi";
import type { Contact } from "../types/contactTypes";

export const useContact = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus pesan ini?")) return;
    try {
      await deleteContact(id);
      setContacts((prev) => prev.filter((c) => c.objectId !== id));
    } catch {
      alert("Gagal menghapus pesan.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return { contacts, loading, handleDelete };
};