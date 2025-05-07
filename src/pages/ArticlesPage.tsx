import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Article {
  id: string;
  title: string;
  arabic_text: string;
  english_text: string;
  created_at: string;
}

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-neutral-100 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-serif text-neutral-800 mb-8">Articles</h1>
      
      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/quote/${article.id}`}
            className="block p-6 rounded-lg glass hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-xl font-serif text-neutral-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-neutral-600 line-clamp-2">
                  {article.english_text}
                </p>
              </div>
              <ArrowRight className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;