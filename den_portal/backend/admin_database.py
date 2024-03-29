import sqlite3
from sqlite3 import Error
from datetime import datetime
import time

# CONSTANTS

FILE = "users.db"
TABLE_NAME = "admin"


class AdminDataBase:
    """
    used to connect, write to and read from a local sqlite3 database
    """
    def __init__(self):
        """
        try to connect to file and create cursor
        """
        self.conn = None
        try:
            self.conn = sqlite3.connect(FILE)
        except Error as e:
            print(e)

        self.cursor = self.conn.cursor()
        self._create_table()

    def close(self):
        """
        close the db connection
        :return: None
        """
        self.conn.close()

    def _create_table(self):
        """
        create new database table if one doesn't exist
        :return: None
        """
        query = f"""CREATE TABLE IF NOT EXISTS {TABLE_NAME}
                    (name TEXT, email TEXT, number NUMBER ,password TEXT , id INTEGER PRIMARY KEY AUTOINCREMENT)"""
        self.cursor.execute(query)
        self.conn.commit()

    def fetch_admin_data(self,ID):
        if "@gmail" in ID:

            query = f"SELECT * FROM {TABLE_NAME} WHERE email = ?"
        
        else:
            query = f"SELECT * FROM {TABLE_NAME} WHERE id = ?"

        self.cursor.execute(query, (ID,))

        result = self.cursor.fetchall()
        if result:
            result  = result[0]

        return result


    def save_data_admin(self, name, email , number , password):
        """
        saves the given message in the table
        :param name: str
        :param msg: str
        :param time: datetime
        :return: None
        """
        query = f"INSERT INTO {TABLE_NAME} VALUES (?, ?, ?, ? , ?)"
        self.cursor.execute(query, (name, email, number, password, None))
        self.conn.commit()
