"use client";

import { useState, useEffect } from "react";
import { Button } from "../../..//components/ui/button";
import { Skeleton } from "../../..//components/ui/skeleton";
import { Plus } from "lucide-react";
import CardPostAdmin from "../../..//components/card-post-admin";
import PostForm from "../../..//components/post-form";

const API = "http://localhost:5500/api/post";

export default function PostsAdmin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // id do post a deletar

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const res = await fetch(API, { credentials: "include" });
    const data = await res.json();
    setPosts(Array.isArray(data) ? data : []); // ✅ garante array
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({ titulo: "", descricao: "" });
    setError("");
    setSheetOpen(true);
  }

  function openEdit(post) {
    setEditing(post);
    setForm({
      titulo: post.titulo,
      descricao: post.descricao ?? "",
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      titulo: form.titulo,
      descricao: form.descricao,
    };

    const res = await fetch(editing ? `${API}/${editing.id}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao salvar post.");
      return;
    }

    setSheetOpen(false);
    fetchPosts();
  }

  async function handleDelete(id) {
    await fetch(`${API}/${id}`, { method: "DELETE", credentials: "include" });
    setConfirmDelete(null);
    fetchPosts();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Novo Post
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhum post cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <CardPostAdmin
              key={post.id}
              post={post}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <PostForm
        editing={editing}
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        saving={saving}
        error={error}
      />
    </div>
  );
}