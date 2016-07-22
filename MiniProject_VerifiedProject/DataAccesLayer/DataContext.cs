using System.Data.Entity;
using MiniProject_VerifiedProject.Models;
using System.Data.Entity;

namespace MiniProject_VerifiedProject.DataAccesLayer
{
    public class DataContext : DbContext
    {
        public DbSet<Picture2Word> Picture2Words { get; set; }
        public DbSet<Punctuation> Punctuations { get; set; }
        public DbSet<Color2Word> Color2Words { get; set; }
        public DbSet<WordPuzzle> WordPuzzles { get; set; }
        public DbSet<User> Users { get; set; }

        public DataContext() : base("MiniProjectConnection") { }
    }
}