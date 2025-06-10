
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, Edit, Save, X, Code, Image } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  image?: string;
}

const BlogManager = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([
    {
      id: '1',
      title: "Go Memory Model Deep Dive",
      description: "The Go memory model defines when writes in one goroutine become visible to reads in another. It guarantees that data-race-free (DRF) programs behave sequentially consistently (SC).",
      content: `The Go memory model defines when writes in one goroutine become visible to reads in another. It guarantees that data-race-free (DRF) programs behave sequentially consistently (SC), meaning they act "as if" goroutines run on a single processor. Concurrency bugs arise when programmers ignore these rules. For example, in Go a data race occurs if one goroutine writes a variable at the same time another reads or writes it without synchronization.

## Happens-Before and Visibility

A core concept is happens-before: it is the transitive closure of program order (sequenced-before) and synchronization edges. In practice this means each goroutine's instructions happen in program order, and synchronization operations (like sending on a channel or unlocking a mutex) create ordering between goroutines.

\`\`\`go
var x int
c := make(chan struct{})
go func() {
    x = 42        // (1)
    close(c)      // (2) send on closed channel (unbuffered sync)
}()
<-c              // (3) receive from channel
fmt.Println(x)  // guaranteed to print 42
\`\`\`

## Synchronization Mechanisms

Go provides several synchronization primitives that establish happens-before edges:

### Channel Communication
Channels are the primary sync mechanism in Go. Each send on a channel is matched with a receive.

### Mutexes and Locks
Mutexes provide mutual exclusion and memory synchronization. The Go memory model ensures that an unlock happens-before any subsequent lock on the same mutex.

### Atomic Operations
The sync/atomic package provides lower-level atomic memory operations. Go's atomic operations are sequentially consistent by default.`,
      date: "Dec 2024",
      readTime: "15 min read"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    readTime: '',
    image: ''
  });

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      readTime: blog.readTime,
      image: blog.image || ''
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingBlog) {
      // Update existing blog
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id 
          ? { ...blog, ...formData, date: blog.date }
          : blog
      ));
    } else {
      // Add new blog
      const newBlog: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };
      setBlogs([newBlog, ...blogs]);
    }
    
    setIsEditing(false);
    setEditingBlog(null);
    setFormData({ title: '', description: '', content: '', readTime: '', image: '' });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingBlog(null);
    setFormData({ title: '', description: '', content: '', readTime: '', image: '' });
  };

  const insertCodeBlock = () => {
    const codeTemplate = '\n```language\n// Your code here\n```\n';
    setFormData({ ...formData, content: formData.content + codeTemplate });
  };

  const insertImagePlaceholder = () => {
    const imagePlaceholder = '\n![Alt text](image-url)\n';
    setFormData({ ...formData, content: formData.content + imagePlaceholder });
  };

  return (
    <div className="py-20 border-t border-gray-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-jetbrains text-black">
          Blog Management
        </h2>
        {!isEditing && (
          <Button 
            onClick={() => setIsEditing(true)}
            className="bg-black text-white hover:bg-gray-800 font-jetbrains"
          >
            <Plus size={16} className="mr-2" />
            Add Blog Post
          </Button>
        )}
      </div>

      {isEditing && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-jetbrains">
              {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title" className="font-jetbrains">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="font-jetbrains"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <Label htmlFor="description" className="font-jetbrains">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="font-jetbrains"
                placeholder="Enter brief description"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="readTime" className="font-jetbrains">Read Time</Label>
              <Input
                id="readTime"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="font-jetbrains"
                placeholder="e.g., 5 min read"
              />
            </div>

            <div>
              <Label htmlFor="image" className="font-jetbrains">Featured Image URL (optional)</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="font-jetbrains"
                placeholder="Enter image URL"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="content" className="font-jetbrains">Content (Markdown supported)</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={insertCodeBlock}
                    className="font-jetbrains"
                  >
                    <Code size={14} className="mr-1" />
                    Code
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={insertImagePlaceholder}
                    className="font-jetbrains"
                  >
                    <Image size={14} className="mr-1" />
                    Image
                  </Button>
                </div>
              </div>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="font-jetbrains min-h-[300px]"
                placeholder="Write your blog content here... You can use Markdown formatting."
              />
            </div>

            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={handleCancel}
                className="font-jetbrains"
              >
                <X size={16} className="mr-2" />
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-black text-white hover:bg-gray-800 font-jetbrains"
                disabled={!formData.title || !formData.description || !formData.content}
              >
                <Save size={16} className="mr-2" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        {blogs.map((blog) => (
          <Card key={blog.id} className="border border-gray-200 hover:border-gray-400 transition-colors">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-jetbrains text-black mb-2">{blog.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3 font-jetbrains">
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <p className="text-gray-700 font-jetbrains mb-4">{blog.description}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(blog)}
                  className="font-jetbrains ml-4"
                >
                  <Edit size={14} className="mr-1" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
