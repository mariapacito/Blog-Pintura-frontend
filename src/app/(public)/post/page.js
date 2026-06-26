// (public)/posts/page.js
"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "../../..//components/ui/skeleton";
import CardPost from "../../../components/CardPost";

const API = "http://localhost:5500/api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Posts</h1>
        <p className="text-muted-foreground mt-2">
          Fique por dentro das últimas novidades.
        </p>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-muted-foreground text-sm">
          Nenhum post cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <CardPost
              key={post.id}
              imagem={post.usuario?.image || "/placeholder-post.jpg"}
              data={new Date(post.criadoEm).toLocaleDateString("pt-BR")}
              titulo={post.titulo}
              descricao={post.descricao}
            />
          ))}
        </div>
      )}
    </div>
  );
}