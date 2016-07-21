using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MiniProject_VerifiedProject.Models
{
    public class Picture2Word
    {
        [Key]
        public int ID { get; set; }
        public string Word { get; set; }
        public byte[] Image { get; set; }
    }

    public class Punctuation
    {
        [Key]
        public int ID { get; set; }
        public string WrongPunctuation { get; set; }
        public string CorrectPunctuation { get; set; }
    }

    public class Color2Word
    {
        [Key]
        public int ID { get; set; }
        public string ColorName { get; set; }
        public string ColorHexa { get; set; }
    }
    public class WordPuzzle
    {
        [Key]
        public int ID { get; set; }
        public string Word { get; set; }
        public string WordSentenceIndex { get; set; }
        public string Sentence { get; set; }
    }
}