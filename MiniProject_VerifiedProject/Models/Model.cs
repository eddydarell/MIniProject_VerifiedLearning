﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;

namespace MiniProject_VerifiedProject.Models
{
    public class Picture2Word
    {
        [Key]
        public int ID { get; set; }
        public string Word { get; set; }
        public string ImageURL { get; set; }
    }


    public class Punctuation
    {
        [Key]
        public int ID { get; set; }
        public string Sequence { get; set; }

    }

    public class Color2Word
    {
        [Key]
        public int ID { get; set; }
        public string ColorName { get; set; }
        public string ColorHex { get; set; }

        
    }
    public class WordPuzzle
    {
        [Key]
        public int ID { get; set; }
        public string Word { get; set; }
        public int WordSentenceIndex { get; set; }
        public string Sentence { get; set; }
    }

    public class User
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public int Category1Score { get; set; }
        public DateTime Category1ScoreDate { get; set; }
        public int Category2Score { get; set; }
        public DateTime Category2ScoreDate { get; set; }
        public int Category3Score { get; set; }
        public DateTime Category3ScoreDate { get; set; }
        public int Category4Score { get; set; }
        public DateTime Category4ScoreDate { get; set; }
        public int CategoryMixScore { get; set; }
        public DateTime CategoryMixScoreDate { get; set; }

    }
}