namespace MiniProject_VerifiedProject.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using MiniProject_VerifiedProject.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<MiniProject_VerifiedProject.DataAccesLayer.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MiniProject_VerifiedProject.DataAccesLayer.DataContext context)
        {
            Picture2Word seedPicture2Word1 = new Picture2Word { Word  ="Circle", ImageURL="/Content/Images/Circle.jpg"};
            Picture2Word seedPicture2Word2 = new Picture2Word { Word = "Octagon", ImageURL = "/Content/Images/Octagon.jpg" };
            Picture2Word seedPicture2Word3 = new Picture2Word { Word = "Pentagon", ImageURL = "/Content/Images/Pentagon.jpg" };
            Picture2Word seedPicture2Word4 = new Picture2Word { Word = "Square", ImageURL = "/Content/Images/Square.jpg" };
            Picture2Word seedPicture2Word5 = new Picture2Word { Word = "Triangle", ImageURL = "/Content/Images/Triangle.jpg" };

            context.Picture2Words.AddOrUpdate(seedPicture2Word1);
            context.Picture2Words.AddOrUpdate(seedPicture2Word2);
            context.Picture2Words.AddOrUpdate(seedPicture2Word3);
            context.Picture2Words.AddOrUpdate(seedPicture2Word4);
            context.Picture2Words.AddOrUpdate(seedPicture2Word5);

            Punctuation seedPunctuation1 = new Punctuation { WrongPunctuation = "This is a wrong sentence at Miniproject", CorrectPunctuation = "This is a wrong sentence, at Miniproject" };
            Punctuation seedPunctuation2 = new Punctuation { WrongPunctuation = "This is a wrong sentence at Miniproject", CorrectPunctuation = "This is a wrong sentence, at Miniproject" };
            Punctuation seedPunctuation3 = new Punctuation { WrongPunctuation = "This is a wrong sentence at Miniproject", CorrectPunctuation = "This is a wrong sentence, at Miniproject" };
            Punctuation seedPunctuation4 = new Punctuation { WrongPunctuation = "This is a wrong sentence at Miniproject", CorrectPunctuation = "This is a wrong sentence, at Miniproject" };
            Punctuation seedPunctuation5 = new Punctuation { WrongPunctuation = "This is a wrong sentence at Miniproject", CorrectPunctuation = "This is a wrong sentence, at Miniproject" };
            context.Punctuations.AddOrUpdate(seedPunctuation1);
            context.Punctuations.AddOrUpdate(seedPunctuation2);
            context.Punctuations.AddOrUpdate(seedPunctuation3);
            context.Punctuations.AddOrUpdate(seedPunctuation4);
            context.Punctuations.AddOrUpdate(seedPunctuation5);

            Color2Word seedColor2Word1 = new Color2Word { ColorName = "Red", ColorHex = "#ff0000" };            
            Color2Word seedColor2Word2 = new Color2Word { ColorName = "Blue", ColorHex = "#0000ff" };
            Color2Word seedColor2Word3 = new Color2Word { ColorName = "Green", ColorHex = "#008000" };
            Color2Word seedColor2Word4 = new Color2Word { ColorName = "White", ColorHex = "#ffffff" };
            Color2Word seedColor2Word5 = new Color2Word { ColorName = "Black", ColorHex = "#000000" };
            context.Color2Words.AddOrUpdate(seedColor2Word1);
            context.Color2Words.AddOrUpdate(seedColor2Word2);
            context.Color2Words.AddOrUpdate(seedColor2Word3);
            context.Color2Words.AddOrUpdate(seedColor2Word4);
            context.Color2Words.AddOrUpdate(seedColor2Word5);
      

            WordPuzzle seedWordPuzzle1 = new WordPuzzle {Word = "This", WordSentenceIndex= 1, Sentence = "This is a sentence"  };
            WordPuzzle seedWordPuzzle2 = new WordPuzzle { Word = "is", WordSentenceIndex = 2, Sentence = "This is a sentence" };
            WordPuzzle seedWordPuzzle3 = new WordPuzzle { Word = "a", WordSentenceIndex = 3, Sentence = "This is a sentence" };
            WordPuzzle seedWordPuzzle4 = new WordPuzzle { Word = "sentence", WordSentenceIndex = 4, Sentence = "This is a sentence" };
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle1);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle2);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle3);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle4);


            WordPuzzle seedWordPuzzle5 = new WordPuzzle { Word = "This", WordSentenceIndex = 1, Sentence = "This was a sentence" };
            WordPuzzle seedWordPuzzle6 = new WordPuzzle { Word = "was", WordSentenceIndex = 2, Sentence = "This was a sentence" };
            WordPuzzle seedWordPuzzle7 = new WordPuzzle { Word = "a", WordSentenceIndex = 3, Sentence = "This was a sentence" };
            WordPuzzle seedWordPuzzle8 = new WordPuzzle { Word = "sentence", WordSentenceIndex = 4, Sentence = "This was a sentence" };
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle5);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle6);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle7);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle8);
    

            WordPuzzle seedWordPuzzle9 = new WordPuzzle { Word = "This", WordSentenceIndex = 1, Sentence = "This will be a sentence" };
            WordPuzzle seedWordPuzzle10 = new WordPuzzle { Word = "will", WordSentenceIndex = 2, Sentence = "This will be a sentence" };
            WordPuzzle seedWordPuzzle11 = new WordPuzzle { Word = "be", WordSentenceIndex = 3, Sentence = "This will be a sentence" };
            WordPuzzle seedWordPuzzle12 = new WordPuzzle { Word = "a", WordSentenceIndex = 4, Sentence = "This will be a sentence" };
            WordPuzzle seedWordPuzzle13 = new WordPuzzle { Word = "sentence", WordSentenceIndex = 5, Sentence = "This will be a sentence" };
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle9);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle10);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle11);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle12);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle13);

            WordPuzzle seedWordPuzzle14 = new WordPuzzle { Word = "This", WordSentenceIndex = 1, Sentence = "This is a proposition" };
            WordPuzzle seedWordPuzzle15 = new WordPuzzle { Word = "is", WordSentenceIndex = 2, Sentence = "This is a proposition" };
            WordPuzzle seedWordPuzzle16 = new WordPuzzle { Word = "a", WordSentenceIndex = 3, Sentence = "This is a proposition" };
            WordPuzzle seedWordPuzzle17 = new WordPuzzle { Word = "proposition", WordSentenceIndex = 4, Sentence = "This is a proposition" };
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle14);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle15);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle16);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle17);


            WordPuzzle seedWordPuzzle18 = new WordPuzzle { Word = "This", WordSentenceIndex = 1, Sentence = "This was a proposition" };
            WordPuzzle seedWordPuzzle19 = new WordPuzzle { Word = "was", WordSentenceIndex = 2, Sentence = "This was a proposition" };
            WordPuzzle seedWordPuzzle20 = new WordPuzzle { Word = "a", WordSentenceIndex = 3, Sentence = "This was a proposition" };
            WordPuzzle seedWordPuzzle21 = new WordPuzzle { Word = "proposition", WordSentenceIndex = 4, Sentence = "This was a proposition" };
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle18);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle19);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle20);
            context.WordPuzzles.AddOrUpdate(seedWordPuzzle21);

            User seedTop1 = new User { Name = "Top1", Category1Score = 10,  Category1ScoreDate = DateTime.Now,  Category2Score = 10, Category2ScoreDate = DateTime.Now, Category3Score = 10, Category3ScoreDate = DateTime.Now, Category4Score = 10, Category4ScoreDate = DateTime.Now, CategoryMixScore = 10, CategoryMixScoreDate = DateTime.Now };
            User seedTop2 = new User { Name = "Top2",  Category1Score = 9, Category1ScoreDate = DateTime.Now, Category2Score = 9, Category2ScoreDate = DateTime.Now, Category3Score = 9, Category3ScoreDate = DateTime.Now, Category4Score = 9, Category4ScoreDate = DateTime.Now, CategoryMixScore = 9, CategoryMixScoreDate = DateTime.Now };
            User seedTop3 = new User { Name = "Top3", Category1Score = 8, Category1ScoreDate = DateTime.Now, Category2Score = 8, Category2ScoreDate = DateTime.Now, Category3Score = 8, Category3ScoreDate = DateTime.Now, Category4Score = 8, Category4ScoreDate = DateTime.Now, CategoryMixScore = 8, CategoryMixScoreDate = DateTime.Now };
            User seedTop4 = new User { Name = "Top4", Category1Score = 7, Category1ScoreDate = DateTime.Now, Category2Score = 7, Category2ScoreDate = DateTime.Now, Category3Score = 7, Category3ScoreDate = DateTime.Now, Category4Score = 7, Category4ScoreDate = DateTime.Now, CategoryMixScore = 7, CategoryMixScoreDate = DateTime.Now };
            User seedTop5 = new User { Name = "Top5", Category1Score = 6, Category1ScoreDate = DateTime.Now, Category2Score = 6, Category2ScoreDate = DateTime.Now, Category3Score = 6, Category3ScoreDate = DateTime.Now, Category4Score = 6, Category4ScoreDate = DateTime.Now, CategoryMixScore = 6, CategoryMixScoreDate = DateTime.Now };
            User seedTop6 = new User { Name = "Top6", Category1Score = 5, Category1ScoreDate = DateTime.Now, Category2Score = 5, Category2ScoreDate = DateTime.Now, Category3Score = 5, Category3ScoreDate = DateTime.Now, Category4Score = 5, Category4ScoreDate = DateTime.Now, CategoryMixScore = 5, CategoryMixScoreDate = DateTime.Now };
            User seedTop7 = new User { Name = "Top7", Category1Score = 4, Category1ScoreDate = DateTime.Now, Category2Score = 4, Category2ScoreDate = DateTime.Now, Category3Score = 4, Category3ScoreDate = DateTime.Now, Category4Score = 4, Category4ScoreDate = DateTime.Now, CategoryMixScore = 4, CategoryMixScoreDate = DateTime.Now };
            User seedTop8 = new User { Name = "Top8", Category1Score = 3, Category1ScoreDate = DateTime.Now, Category2Score = 3, Category2ScoreDate = DateTime.Now, Category3Score = 3, Category3ScoreDate = DateTime.Now, Category4Score = 3, Category4ScoreDate = DateTime.Now, CategoryMixScore = 3, CategoryMixScoreDate = DateTime.Now };
            User seedTop9 = new User { Name = "Top9", Category1Score = 2, Category1ScoreDate = DateTime.Now, Category2Score = 2, Category2ScoreDate = DateTime.Now, Category3Score = 2, Category3ScoreDate = DateTime.Now, Category4Score = 2, Category4ScoreDate = DateTime.Now, CategoryMixScore = 2, CategoryMixScoreDate = DateTime.Now };
            User seedTop10 = new User { Name = "Top10", Category1Score = 1, Category1ScoreDate = DateTime.Now, Category2Score = 1, Category2ScoreDate = DateTime.Now, Category3Score = 1, Category3ScoreDate = DateTime.Now, Category4Score = 1, Category4ScoreDate = DateTime.Now, CategoryMixScore = 1, CategoryMixScoreDate = DateTime.Now };

            context.Users.AddOrUpdate(seedTop1);
            context.Users.AddOrUpdate(seedTop2);
            context.Users.AddOrUpdate(seedTop3);
            context.Users.AddOrUpdate(seedTop4);
            context.Users.AddOrUpdate(seedTop5);
            context.Users.AddOrUpdate(seedTop6);
            context.Users.AddOrUpdate(seedTop7);
            context.Users.AddOrUpdate(seedTop8);
            context.Users.AddOrUpdate(seedTop9);
            context.Users.AddOrUpdate(seedTop10);
        }
        
        
    }

}
