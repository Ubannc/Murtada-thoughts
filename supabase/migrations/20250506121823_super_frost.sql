/*
  # Create articles table and security policies

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text)
      - `arabic_text` (text)
      - `english_text` (text)
      - `content` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `articles` table
    - Add policies for admin access
*/

CREATE TABLE articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  arabic_text text NOT NULL,
  english_text text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON articles
  FOR SELECT USING (true);

CREATE POLICY "Enable write access for authenticated users" ON articles
  FOR ALL USING (auth.role() = 'authenticated');