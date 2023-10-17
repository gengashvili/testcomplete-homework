function EventControl1_OnStartTest(Sender)
{
  Log.Message("test app started");
}

function EventControl1_OnStopTest(Sender)
{
  Log.Message("test app stoped");
}


function EventControl1_OnLogError(Sender, LogParams)
{
  Log.Message("error occured");
}
