using System;
using System.Collections.Generic;
using System.Linq;
using MiniProject_VerifiedProject.DataAccesLayer;
using MiniProject_VerifiedProject.Models;

namespace MiniProject_VerifiedProject.Repositories
{


    public class Repository
    {
        private DataContext _db;
        public Repository()
        {
            _db = new DataContext();
        }

        public IEnumerable<Picture2Word> GetAllPicture2Words()
        {
            return _db.Picture2Words;
        }

        public IEnumerable<Punctuation> GetAllPunctuations()
        {
            return _db.Punctuations;
        }
        public IEnumerable<Color2Word> GetAllColor2Words()
        {
            return _db.Color2Words;
        }
        public IEnumerable<WordPuzzle> GetAllWordPuzzles()
        {
            return _db.WordPuzzles;
        }
        public IEnumerable<User> GetAllUsers()
        {
            return _db.Users;
        }
    }
}