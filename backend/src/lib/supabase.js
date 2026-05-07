import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export const PLACE_IMAGES_BUCKET = 'place-images'
export const BLOG_IMAGES_BUCKET = 'blog-images'

/**
 * Upload a file buffer to Supabase Storage.
 * Returns the public URL.
 */
export async function uploadFile(bucket, path, buffer, mimetype) {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, buffer, { contentType: mimetype, upsert: true })

  if (error) throw new Error(error.message)

  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

/**
 * Delete a file from Supabase Storage.
 */
export async function deleteFile(bucket, path) {
  await supabase.storage.from(bucket).remove([path])
}

export default supabase
