namespace MiniProject_VerifiedProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class migration1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "CategoryMixScore", c => c.Int(nullable: false));
            AddColumn("dbo.Users", "CategoryMixScoreDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "CategoryMixScoreDate");
            DropColumn("dbo.Users", "CategoryMixScore");
        }
    }
}
