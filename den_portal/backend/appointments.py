import sqlite3
from sqlite3 import Error
from datetime import datetime
import time
import json

# CONSTANTS

FILE = "appointments.db"
TABLE_NAME = "appointment"


class Appointments:
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
                    (customer_id TEXT, data TEXT , id INTEGER PRIMARY KEY AUTOINCREMENT)"""
        self.cursor.execute(query)
        self.conn.commit()

    def fetch_all_record(self):

        """
            fetch all the record from database
            to display in the appointments page
        """

        query = f"SELECT * FROM {TABLE_NAME}"
        
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return result

    def save_data(self,data):
        """
        saves the given message in the table
        :param name: str
        :param msg: str
        :param time: datetime
        :return: None
        """
        customer_id = data['customer_id']
        appointments = json.dumps(data['services'])
        query = f"INSERT INTO {TABLE_NAME} VALUES (?, ?, ?)"
        self.cursor.execute(query, (customer_id, appointments , None))
        self.conn.commit()
