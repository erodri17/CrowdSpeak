public class UserDB {
    public static final String DATABASE_NAME = "project02.db";
    public static final int VERSION = 6;

    public static class Users {

        public static final String NAME = "users";

        public static class Cols {

            public static final String EMAIL = "email";
            public static final String PASSWORD = "password";
            public static final String FULL_NAME = "full_name";
            public static final String FIRST_LANGUAGE = "first_language";
            public static final String YEARS_LEARNING = "years_learning";
        }

    }

    public static class Videos {
        public static final String NAME = "videos";
        public static class Cols {
            public static final String EMAIL = "email";
            public static final String POSTED_DATE = "posted_date";
            public static final String VIDEO_PATH = "video_path";
        }
    }

    public static class Transcriptions {
        public static final String NAME = "transcription";
        public static class Cols {
            public static final String EMAIL = "email";
            public static final String VIDEO_PATH = "video_path";
            public static final String TRANSCRIPTION_PATH = "transcription_path";

        }
    }

    public static class TranscriptionComment {
        public static class Cols {
            public static final String TRANSCRIPTION_PATH = "transcription_path";
            public static final String TYPE = "manual"; // Can be: manual, unclear, speed
            public static final String COMMENT = "comment_text";
        }
    }

}
