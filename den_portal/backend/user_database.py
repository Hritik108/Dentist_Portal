import sqlite3
from sqlite3 import Error
from datetime import datetime
import time

# CONSTANTS

FILE = "users.db"
TABLE_NAME = "user"


class DataBase:
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
                    (name TEXT, email TEXT, number NUMBER ,password TEXT, address TEXT , gender TEXT , id INTEGER PRIMARY KEY AUTOINCREMENT)"""
        self.cursor.execute(query)
        self.conn.commit()

    def fetch_data(self,ID):
        if "@gmail" in ID:

            query = f"SELECT * FROM {TABLE_NAME} WHERE email = ?"
        
        else:
            query = f"SELECT * FROM {TABLE_NAME} WHERE id = ?"

        self.cursor.execute(query, (ID,))

        result = self.cursor.fetchall()
        if result:
            result  = result[0]

        return result

    def returning_customer_id(self,email):
        query = f"SELECT * FROM {TABLE_NAME} WHERE email  = ?"
        self.cursor.execute(query, (email,))
        result = self.cursor.fetchall()[0]

        return result


    def save_data(self, name, email , number , password,address , gender):
        """
        saves the given message in the table
        :param name: str
        :param msg: str
        :param time: datetime
        :return: None
        """
        query = f"INSERT INTO {TABLE_NAME} VALUES (?, ?, ?, ? , ?, ?)"
        self.cursor.execute(query, (name, email, number, password, address , None))
        self.conn.commit()

        return self.returning_customer_id(email)
