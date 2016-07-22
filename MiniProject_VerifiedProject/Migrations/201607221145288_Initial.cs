namespace MiniProject_VerifiedProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Color2Word",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        ColorName = c.String(),
                        ColorHex = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Picture2Word",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Word = c.String(),
                        ImageURL = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Punctuations",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        WrongPunctuation = c.String(),
                        CorrectPunctuation = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Category1Score = c.Int(nullable: false),
                        Category1ScoreDate = c.DateTime(nullable: false),
                        Category2Score = c.Int(nullable: false),
                        Category2ScoreDate = c.DateTime(nullable: false),
                        Category3Score = c.Int(nullable: false),
                        Category3ScoreDate = c.DateTime(nullable: false),
                        Category4Score = c.Int(nullable: false),
                        Category4ScoreDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.WordPuzzles",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Word = c.String(),
                        WordSentenceIndex = c.Int(nullable: false),
                        Sentence = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.WordPuzzles");
            DropTable("dbo.Users");
            DropTable("dbo.Punctuations");
            DropTable("dbo.Picture2Word");
            DropTable("dbo.Color2Word");
        }
    }
}
